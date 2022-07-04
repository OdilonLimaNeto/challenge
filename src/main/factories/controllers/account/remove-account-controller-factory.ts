import { makeDbRemoveAccount } from '@/main/factories/usecases/account/db-remove-account-factory'
import { RemoveAccountController } from '@/presentation/controllers/account/remove-account-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeRemoveAccountValidation } from './account-validation/remove-account-validation-factory'

export const makeRemoveAccountController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const accountController = new RemoveAccountController(makeDbRemoveAccount(), makeRemoveAccountValidation(), erroHandler)
  return accountController
}
