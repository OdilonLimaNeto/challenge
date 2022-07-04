import { Result } from 'countapi-js'

export type FindAmountAccess = {
  findAmount: () => Promise<Result>
}
