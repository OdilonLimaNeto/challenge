import express from 'express'
import setupSwagger from './config-swagger'
import setupEnv from './env'
import setupMiddlewares from './middlewares'
import setupPGNumberOverride from './pg-numeric-format'
import setupRoutes from './routes'


const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
setupEnv()
setupPGNumberOverride()
export default app
