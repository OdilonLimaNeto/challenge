export type RemoveAccountRepository = {
  remove: (accountId: string) => Promise<number>
}
