import { IncrementAmountAccess } from '@/domain/usecases/access/increment-amout-access'
import { IncrementAmountAccessController } from '@/presentation/controllers/accesss/increment-amount-acess-controller'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler } from '@/presentation/protocols'
import { makeErrorHandler } from '@/tests/unitary/presentation/mocks/controller-helpers'
import MockDate from 'mockdate'
import { makeDbIncrementAmountAccess } from '../../mocks/access/mock-access'

interface SutTypes {
  errorHandlerStub: ErrorHandler
  findIncrementAmountAccessStub: IncrementAmountAccess
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const findIncrementAmountAccessStub = makeDbIncrementAmountAccess()
  const sut = new IncrementAmountAccessController(findIncrementAmountAccessStub, errorHandlerStub)

  return {
    findIncrementAmountAccessStub,
    errorHandlerStub,
    sut
  }
}

describe('IncrementAmountAccess', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call incrementAmountAccess with correct param', async () => {
    const { sut, findIncrementAmountAccessStub } = makeSut()
    const findSpy = jest.spyOn(findIncrementAmountAccessStub, 'incrementAmount')

    await sut.handle()
    expect(findSpy).toHaveBeenCalledWith()
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, findIncrementAmountAccessStub, errorHandlerStub } = makeSut()
    jest.spyOn(findIncrementAmountAccessStub, 'incrementAmount').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle()
    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return ok with incrementAmountAccess on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle()
    expect(response).toEqual(ok('increased access to the TON website and the updated value is: 1'))
  })
})
