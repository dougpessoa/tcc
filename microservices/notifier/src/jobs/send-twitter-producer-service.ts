/* eslint-disable prettier/prettier */
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { TwitterUserDTO } from 'src/dtos/notifier.dto';

@Injectable()
class SendTwitterProducerService {
  constructor(@InjectQueue('sendTweet-queue') private queue: Queue) { }

  async sendTweet(notifierUser: TwitterUserDTO) {
    await this.queue.add('sendTweet-job', notifierUser);
  }
}

export { SendTwitterProducerService };
