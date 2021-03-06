import { IncrementAmountAccess } from '@/domain/usecases/access/increment-amout-access'
import countapi, { Result } from 'countapi-js'

export class DbIncrementAmountAccess implements IncrementAmountAccess {
  async incrementAmount(): Promise<Result> {
    const incrementAmountAcess: Result = await countapi.hit('ton.com.br', 'visits')

    return incrementAmountAcess
  }
}
