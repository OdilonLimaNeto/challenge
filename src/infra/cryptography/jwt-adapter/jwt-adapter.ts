import { Decrypter } from '@/data/protocols/cryptography/decrypter'
import { Encrypter } from '@/data/protocols/cryptography/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(private readonly secret: string) { }

  async encrypt(id: string): Promise<string> {
    return jwt.sign({ id }, this.secret, { expiresIn: '30 days' })
  }

  async decrypt(token: string): Promise<string> {
    try {
      const tokenValue = token.startsWith('Bearer') ? token.split(' ')[ 1 ] : token
      const value: any = jwt.verify(tokenValue, this.secret)
      return value
    } catch (error) {
      return error
    }
  }
}
