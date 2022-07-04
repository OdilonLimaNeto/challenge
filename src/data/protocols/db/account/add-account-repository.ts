import { AccountModelResponse } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecases/account/add-account'

export type AddAccountRepository = {
  add: (accountData: AddAccountParams) => Promise<AccountModelResponse>
}
