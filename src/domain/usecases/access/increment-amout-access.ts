import { Result } from 'countapi-js'

export type IncrementAmountAccess = {
  incrementAmount: () => Promise<Result>
}
