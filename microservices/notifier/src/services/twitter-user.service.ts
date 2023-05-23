/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TwitterUserDTO } from 'src/dtos/notifier.dto';
import { TwitterUserModel } from 'src/model/twitter-user.model';


@Injectable()
export class TwitterUserService {
  constructor(
    @InjectModel('TwitterUserName') private readonly twitterUserModel: Model<TwitterUserModel>
  ) { }

  async create(userNotifier: TwitterUserDTO): Promise<any> {
    const createduser = new this.twitterUserModel(userNotifier)

    return await createduser.save()
  }

  async updateTime(username: string): Promise<any> {
    return await this.twitterUserModel.updateOne({ username }, { lastTimeNotification: new Date() })
  }

  async getUsername(username: string): Promise<TwitterUserDTO> {
    return await this.twitterUserModel.findOne({ username }).exec()
  }
}
