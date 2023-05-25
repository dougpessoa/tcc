import axios from "axios";
import { TSeekerSaveProps } from "../types";
import { SEEKER_DOMAIN } from "../server";
import { AppError } from "../errors/AppError";

export class SeekerService {
  async saveUsername(data: TSeekerSaveProps) {
    try {
      return await axios.post(`${SEEKER_DOMAIN}/seeker`, data)
    } catch (error) {
      throw new AppError("Something is wrong - code: S1E1");
    }
  }

  async deleteUsername(username: string) {
    try {
      return await axios.delete(`${SEEKER_DOMAIN}/seeker/u/${username}`)
    } catch (error) {
      throw new AppError("Something is wrong - code: S1E2");
    }
  }
}