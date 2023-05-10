import { Router } from 'express'
import { IMessage, Message } from '../models/Messages'
import { MessagesServices } from '../services/Messages'

const messageRouter = Router()

messageRouter.post('/', async (request, response) => {
  const { issuer_city, issuer_contry, issuer_ip, message, platform, username } = request.body as IMessage

  const messageBody = {
    issuer_city,
    issuer_contry,
    issuer_ip,
    message,
    platform,
    username
  }

  const messagesService = new MessagesServices();

  const result = await messagesService.createMessage(messageBody)

  return response.status(result.status).json(result)
})

messageRouter.get('/', async (request, response) => {
  const { page, size } = request.query
  const messagesService = new MessagesServices();

  const result = await messagesService.listMessages(
    Number(page || '1'),
    Number(size || '25')
  )

  return response.status(result.status).json(result)
})

messageRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const messagesService = new MessagesServices();

  const result = await messagesService.showMessage(id)

  return response.status(result.status).json(result)
})

export { messageRouter }


