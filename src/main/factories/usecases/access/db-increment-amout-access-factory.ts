import { DbIncrementAmountAccess } from '@/data/usecases/access/db-increment-amout-access'
import { IncrementAmountAccess } from '@/domain/usecases/access/increment-amout-access'

export const makeDbIncrementAmountAccess = (): IncrementAmountAccess => {
  return new DbIncrementAmountAccess()
}
