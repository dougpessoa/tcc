import { Router } from 'express'
import { Message } from '../models/Messages'
import { MessageDTO } from '../dtos'
import { MessagesController } from '../controllers/Messages.controller'

const messageRouter = Router()

messageRouter.post('/', async (request, response) => {
  const { issuer_city, issuer_contry, issuer_ip, message, platform, username } = request.body as MessageDTO
  const messageBody = {
    issuer_city,
    issuer_contry,
    issuer_ip,
    message,
    platform,
    username
  }

  const messagesService = new MessagesController();

  const result = await messagesService.saveMessage(messageBody)

  return response.status(result.status).json(result)
})

messageRouter.get('/:username/:platform', async (request, response) => {
  const { username, platform } = request.params
  const { page, size } = request.query
  const messagesService = new MessagesController();

  const result = await messagesService.listMessages(
    username,
    platform === 'instagram' ? 0 : 1,
    Number(page || '1'),
    Number(size || '25')
  )

  return response.status(result.status).json(result)
})

messageRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const messagesService = new MessagesController();

  const result = await messagesService.getMessage(id)

  return response.status(result.status).json(result)
})

export { messageRouter }


