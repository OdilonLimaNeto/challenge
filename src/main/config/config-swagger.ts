import swaggerDocs from '@/main/docs/swagger.json'
import { Express } from 'express'
import { serve, setup } from 'swagger-ui-express'

export default (app: Express): void => {
  app.use('/api', serve, setup(swaggerDocs))
}
