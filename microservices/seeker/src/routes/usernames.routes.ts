import { Router } from 'express'
import { UsernameService } from '../services/Username';

type ParamsTypes = { username?: string }

const usernameRoutes = Router();

usernameRoutes.post('/', async (request, response) => {
  const { username, platform } = request.body

  const usernameService = new UsernameService();

  const result = await usernameService.saveUsername(username, platform)

  return response.status(result.status).json(result)
})


usernameRoutes.get('/:username', async (request, response) => {
  const { username } = request.params as ParamsTypes

  const usernameService = new UsernameService();

  const result = await usernameService.searchUsername(username)

  return response.status(result.status).json(result)
})

usernameRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

  const usernameService = new UsernameService();

  const result = await usernameService.deleteUsername(id)

  return response.status(result.status).json(result)
})

export { usernameRoutes }