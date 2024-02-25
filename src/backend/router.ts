import { Router } from 'express'
import { resourcesInjector } from './resourcesInjector'

export const backendRouter = () => {
  const router = Router()

  router.use(resourcesInjector())

  return router
}
