import { Router } from 'express'
import { usernameRoutes } from './usernames.routes'

const routes = Router()

routes.use('/seeker', usernameRoutes)
routes.get('/elastic', (request, response) => {
  return response.redirect('http://localhost:5601')
})

export { routes }