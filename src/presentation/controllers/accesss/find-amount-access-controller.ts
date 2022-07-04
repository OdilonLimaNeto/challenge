import { EnumError } from '@/domain/enums/enum-error'
import { FindAmountAccess } from '@/domain/usecases/access/find-amount-access'
import { badRequest, ok } from '@/presentation/helpers/http/http-helper'
import { ErrorHandler } from '@/presentation/protocols'
import { Result } from 'countapi-js'
import { Controller, HttpResponse } from './access-controller-protocols'

export class FindAmountAccessController implements Controller {
  constructor(
    private readonly findAmountAccess: FindAmountAccess,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const amountAccessResult: Result = await this.findAmountAccess.findAmount()
      if (amountAccessResult.status === EnumError.BADREQUEST.value) {
        return badRequest('Error when fetching the number of hits to the TON website')
      }
      if (amountAccessResult.status === EnumError.NOTFOUND.value) {
        return badRequest('Key does not exist in count api')
      }
      return ok(`The number of hits to the TON website is: ${amountAccessResult.value} so far.`)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}