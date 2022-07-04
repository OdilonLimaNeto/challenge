import { AccountModelResponse } from '@/data/usecases/account/db-accounts-protocols'

export type FindAccountById = {
  findById: (id: string) => Promise<AccountModelResponse>
}
