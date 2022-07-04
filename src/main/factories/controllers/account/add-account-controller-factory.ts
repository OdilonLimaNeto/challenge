import { makeDbAddAccount } from '@/main/factories/usecases/account/db-add-account-factory'
import { AddAccountController } from '@/presentation/controllers/account/add-account-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeAccountValidation } from './account-validation/account-validation-factory'

export const makeAddAccountController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const accountController = new AddAccountController(makeDbAddAccount(), makeAccountValidation(), erroHandler)
  return accountController
}
