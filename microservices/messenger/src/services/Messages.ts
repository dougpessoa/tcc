import { IMessage, Message } from "../models/Messages"

class MessagesServices {
  async listMessages(page?: number, limit?: number) {
    console.log(page, limit)
    try {
      const messages = await Message.paginate({}, { page, limit })

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

  async showMessage(_id: string) {
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

  async createMessage(message: IMessage) {
    const doesUserExists = await this.doesUserExists(message.username)

    if (!doesUserExists) {
      // call elasticsearch microservice
    }

    try {
      await Message.create(message)
      // call twitter microservice
      return {
        doesUserExists,
        message: 'Message successfully created!',
        router: "/user/" + message.username,
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

export { MessagesServices }