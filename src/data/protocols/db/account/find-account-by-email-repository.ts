import { AccountModel } from '@/domain/models/account'

export type FindAccountByEmailRepository = {
  findByEmail: (email: string) => Promise<AccountModel>
}
