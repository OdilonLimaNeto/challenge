export type AddAccountsParams = {
  email: string
  password: string
}

export type AccountResponse = {
  id: string
  name: string
  email: string
}

export type AuthResponse = {
  user: AccountResponse
  accessToken: string
}

export type Authentication = {
  auth: (authentication: AddAccountsParams) => Promise<AuthResponse>
}
