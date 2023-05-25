import axios from "axios";
import { TTwitterNotifyProps } from "../types";
import { TWITTER_DOMAIN } from "../server";
import { AppError } from "../errors/AppError";

export class TwitterService {
  async notifyUser(data: TTwitterNotifyProps) {
    try {
      return await axios.post(`${TWITTER_DOMAIN}/notifier-user`, data)
    } catch (error) {
      throw new AppError("Something is wrong - code: S1E4");
    }
  }
}