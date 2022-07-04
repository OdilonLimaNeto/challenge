import { DbRemoveAccount } from '@/data/usecases/account/db-remove-account'
import { RemoveAccount } from '@/domain/usecases/account/remove-account'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbRemoveAccount = (): RemoveAccount => {
  const accountRepository = new AccountRepository()
  return new DbRemoveAccount(accountRepository)
}
