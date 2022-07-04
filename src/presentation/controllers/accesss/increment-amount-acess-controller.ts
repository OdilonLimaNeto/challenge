import { EnumError } from '@/domain/enums/enum-error'
import { IncrementAmountAccess } from '@/domain/usecases/access/increment-amout-access'
import { badRequest, ok } from '@/presentation/helpers/http/http-helper'
import { ErrorHandler } from '@/presentation/protocols'
import { Controller, HttpResponse } from './access-controller-protocols'

export class IncrementAmountAccessController implements Controller {
  constructor(
    private readonly incrementAmountAccess: IncrementAmountAccess,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const incrementAmountAccessResult = await this.incrementAmountAccess.incrementAmount()
      if (incrementAmountAccessResult.status === EnumError.NOTFOUND.value) {
        return badRequest('Key does not exist in count api')
      }
      return ok(`increased access to the TON website and the updated value is: ${incrementAmountAccessResult.value}`)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
