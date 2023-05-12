import { Router } from 'express'
import { usernameRoutes } from './usernames.routes'

const routes = Router()

routes.use('/seeker', usernameRoutes)

export { routes }