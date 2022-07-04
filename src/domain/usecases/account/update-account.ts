import { AccountModel } from '@/domain/models/account'

export type UpdateAccountParams = Omit<AccountModel, 'id' | 'created_at' | 'updated_at'>
export type UpdateAccount = {
  update: (accountId: string, account: UpdateAccountParams) => Promise<number>
}
