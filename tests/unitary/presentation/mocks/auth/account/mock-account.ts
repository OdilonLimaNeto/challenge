import { AccountModel } from '@/domain/models/account'
import { AddAccount, AddAccountParams } from '@/domain/usecases/account/add-account'
import { FindAccountById } from '@/domain/usecases/account/find-account-by-id'
import { RemoveAccount } from '@/domain/usecases/account/remove-account'
import { UpdateAccount, UpdateAccountParams } from '@/domain/usecases/account/update-account'
import { makeAccountModel } from '@/tests/unitary/domain/mocks/auth/account/account-mocks'

export const makeDbAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add(account: AddAccountParams): Promise<AccountModel> {
      return await new Promise(resolve => resolve(makeAccountModel()))
    }
  }
  return new AddAccountStub()
}

export const makeDbRemoveAccount = (): RemoveAccount => {
  class RemoveAccountStub implements RemoveAccount {
    async remove(idAccount: string): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }
  return new RemoveAccountStub()
}

export const makeDbFindAccountByIdStub = (): FindAccountById => {
  class FindAccountByIdStub implements FindAccountById {
    async findById(idAccount: string): Promise<AccountModel> {
      return await new Promise(resolve => resolve(makeAccountModel()))
    }
  }
  return new FindAccountByIdStub()
}

export const makeDbUpdateAccount = (): UpdateAccount => {
  class DbUpdateAccountStub implements UpdateAccount {
    async update(accountId: string, accountData: UpdateAccountParams): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }
  return new DbUpdateAccountStub()
}
