import { DbUpdateAccount } from '@/data/usecases/account/db-update-account'
import { UpdateAccount } from '@/domain/usecases/account/update-account'
import { BcryptAdapter } from '@/infra/cryptography/brcrypt-adapter/bcrypt-adapter'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbUpdateAccount = (): UpdateAccount => {
  const salt = 12
  const hasher = new BcryptAdapter(salt)
  const accountRepository = new AccountRepository()
  return new DbUpdateAccount(hasher, accountRepository)
}
