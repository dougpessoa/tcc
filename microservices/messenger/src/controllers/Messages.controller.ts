import { MessageDTO } from "../dtos";
import { AppError } from "../errors/AppError";
import { MessagesService } from "../services/Messages.service";
import { SeekerService } from "../services/Seeker.service";
import { TwitterService } from "../services/Twitter.service";

export class MessagesController {
  constructor(
    private readonly messagesService = new MessagesService()
  ) { }

  async saveMessage(message: MessageDTO) {
    const { username, platform } = message
    const doesUserExists = await this.messagesService.doesUserExists(message.username)
    const seekerService = new SeekerService()

    if (!doesUserExists) {
      await seekerService.saveUsername({ username, platform })
    }

    let response: any = null

    try {
      response = await this.messagesService.create(message)
    } catch {
      await seekerService.deleteUsername(username)
      throw new AppError("Something is wrong - S1E3");
    }

    if (message.platform === 1) {
      const twitterService = new TwitterService()

      await twitterService.notifyUser({ username })
    }
    return {
      status: 200,
      response
    }
  }

  async listMessages(username: string, platform: number, page?: number, limit?: number) {
    return await this.messagesService.getAll(username, platform, page, limit)
  }

  async getMessage(_id: string) {
    return await this.messagesService.getOne(_id)
  }
}