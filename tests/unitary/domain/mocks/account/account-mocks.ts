import { AddAccountParams } from '@/domain/usecases/account/add-account'

export const makeAccount = (): AddAccountParams => ({
  name: 'xxxxxx',
  email: 'any_email2@email.com',
  password: 'any_password'
})
