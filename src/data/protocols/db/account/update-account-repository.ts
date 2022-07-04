import { UpdateAccountParams } from '@/domain/usecases/account/update-account'

export type UpdateAccountRepository = {
  update: (accountId: string, accountData: UpdateAccountParams) => Promise<number>
}
