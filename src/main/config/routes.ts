import accesRoutes from '@/main/routes/access-routes'
import authRoutes from '@/main/routes/auth-routes'
import { Express, Router } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)
  authRoutes(router)
  accesRoutes(router)
}
