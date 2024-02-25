import { Request, RequestHandler } from 'express'

interface BackendRequestToEnrich extends Request {
  resources?: {
  }
}

export const getResources = (req: Request) => {
  return (req as BackendRequestToEnrich).resources!
}

export const resourcesInjector: () => RequestHandler = () => {

  const resources = {
  }

  return (req: BackendRequestToEnrich, _res, next) => {
    req.resources = resources
    next()
  }
}