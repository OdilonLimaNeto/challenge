import { FindAccountByIdRepository } from '@/data/protocols/db/account/find-account-by-id-repository'
import { AccountModelResponse } from '@/data/usecases/account/db-accounts-protocols'
import { FindAccountById } from '@/domain/usecases/account/find-account-by-id'

export class DbFindAccountById implements FindAccountById {
  constructor(
    private readonly findAccountByIdRepository: FindAccountByIdRepository
  ) { }

  async findById(id: string): Promise<AccountModelResponse> {
    const accountsIdResponse = await this.findAccountByIdRepository.findById(id)
    return accountsIdResponse
  }
}
