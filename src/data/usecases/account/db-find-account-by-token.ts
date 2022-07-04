import { Decrypter } from '@/data/protocols/cryptography/decrypter'
import { FindAccountByIdRepository } from '@/data/protocols/db/account/find-account-by-id-repository'
import { AccountModelResponse } from '@/domain/models/account'
import { FindAccountByToken } from '@/domain/usecases/account/find-account-by-token'

type DescryptedToken = { id: string }
export class DbFindAccountByToken implements FindAccountByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly findAccountByIdRepository: FindAccountByIdRepository
  ) { }

  async find(accessToken: string): Promise<AccountModelResponse> {
    const descryptedToken: DescryptedToken = await this.decrypter.decrypt(accessToken) as DescryptedToken
    if (descryptedToken?.id) {
      const account = await this.findAccountByIdRepository.findById(descryptedToken.id)
      if (account) { return account }
    }
    return null
  }
}
