/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { TwitterUserDTO } from 'src/dtos/notifier.dto';
import { SendTwitterProducerService } from 'src/jobs/send-twitter-producer-service';

@Controller('notifier-user')
export class NotifierUserController {
  constructor(
    private sendTweetService: SendTwitterProducerService
  ) { }

  @Post('/')
  async notifierUser(@Body() notifierUser: TwitterUserDTO) {
    this.sendTweetService.sendTweet(notifierUser);

    return notifierUser;
  }
}
