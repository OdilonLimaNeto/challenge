import { DbAuthentication } from '@/data/usecases/authentication/db-authentication'
import { Authentication } from '@/domain/usecases/authentication'
import { BcryptAdapter } from '@/infra/cryptography/brcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter/jwt-adapter'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bCryptAdabter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const accountRepository = new AccountRepository()
  return new DbAuthentication(accountRepository, bCryptAdabter, jwtAdapter)
}
