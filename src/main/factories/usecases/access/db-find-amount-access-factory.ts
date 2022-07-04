import { DbFindAmountAccess } from '@/data/usecases/access/db-find-amount-access'
import { FindAmountAccess } from '@/domain/usecases/access/find-amount-access'

export const makeDbFindAmountAccess = (): FindAmountAccess => {
  return new DbFindAmountAccess()
}
