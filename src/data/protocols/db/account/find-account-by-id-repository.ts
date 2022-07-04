import { AccountModelResponse } from '@/domain/models/account'

export type FindAccountByIdRepository = {
  findById: (id: string) => Promise<AccountModelResponse>
}
