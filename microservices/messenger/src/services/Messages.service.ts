import { Message, MessageDTO } from "../models/Messages"

class MessagesService {
  async getAll(username: string, platform: number, page?: number, limit?: number) {
    try {
      const messages = await Message.paginate({
        username,
        platform: Number(platform)
      }, { page, limit })

      return {
        ...messages,
        status: 200
      }
    } catch (err) {
      return {
        message: 'Error to show messages',
        error: err,
        status: 500
      }
    }
  }

  async getOne(_id: string) {
    try {
      const message = await Message.findOne({ _id })
      return {
        message,
        status: 200
      }
    } catch (err) {
      return {
        message: 'Error to show message',
        error: err,
        status: 500
      }
    }
  }

  async create(message: MessageDTO) {
    try {
      const response = await Message.create(message)

      return {
        response,
        message: 'Message successfully created!',
        router: "/user/" + message.username + (message.platform === 0 ? "/instagram" : "/twitter"),
        status: 201
      }
    } catch (err) {
      return {
        message: 'Error to create message',
        error: err,
        status: 500
      }
    }
  }

  async doesUserExists(username: string) {
    const result = await Message.findOne({ username })

    if (!result) return false

    return true
  }
}

export { MessagesService }