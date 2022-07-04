import { AccountModelResponse } from '@/domain/models/account'

export type FindAccountByToken = {
  find: (accessToken: string) => Promise<AccountModelResponse>
}
