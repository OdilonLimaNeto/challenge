import { DbFindAccountById } from '@/data/usecases/account/db-find-account-by-id'
import { FindAccountById } from '@/domain/usecases/account/find-account-by-id'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbFindAccountById = (): FindAccountById => {
  const accountRepository = new AccountRepository()
  return new DbFindAccountById(accountRepository)
}
