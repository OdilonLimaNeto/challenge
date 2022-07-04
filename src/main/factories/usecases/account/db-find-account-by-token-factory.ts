import { DbFindAccountByToken } from '@/data/usecases/account/db-find-account-by-token'
import { FindAccountByToken } from '@/domain/usecases/account/find-account-by-token'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter/jwt-adapter'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbLoadAccountByToken = (): FindAccountByToken => {
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const accountRepository = new AccountRepository()
  return new DbFindAccountByToken(jwtAdapter, accountRepository)
}
