import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeFindAmountAccessController } from '../factories/controllers/access/find-amount-access-controller-factory'
import { makeIncrementAmountAccessController } from '../factories/controllers/access/increment-amount-access-controller-factory'
import { auth } from '../middlewares'

export default (router: Router): void => {
  router.get('/find-amount-access', auth(), adaptRoute(makeFindAmountAccessController()))
  router.get('/increment-access', auth(), adaptRoute(makeIncrementAmountAccessController()))
}
