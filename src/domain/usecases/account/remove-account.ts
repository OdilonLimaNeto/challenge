export type RemoveAccount = {
  remove: (accountId: string) => Promise<number>
}
