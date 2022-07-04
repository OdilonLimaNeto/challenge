export type Decrypter = {
  decrypt: (value: string) => Promise<object | string>
}
