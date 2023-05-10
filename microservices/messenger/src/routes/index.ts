import { Router } from 'express'
import { messageRouter } from './messages.routes'

const routes = Router()

routes.use('/messages', messageRouter)

export { routes }