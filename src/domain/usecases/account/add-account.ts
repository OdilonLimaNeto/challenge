import { AccountModel, AccountModelResponse } from '@/domain/models/account'

export type AddAccountParams = Omit<AccountModel, 'id' | 'created_at' | 'updated_at'>
export type AddAccount = {
  add: (account: AddAccountParams) => Promise<AccountModelResponse>
}
