/* eslint-disable prettier/prettier */
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { TwitterUserDTO } from 'src/dtos/notifier.dto';
import { postTweet } from 'src/services/tweet.service';
import { TwitterUserService } from 'src/services/twitter-user.service';
import { datesIsMoreThen24Hours } from 'src/utils';


@Processor('sendTweet-queue')
class SendTweetConsumer {
  constructor(private TwitterUserService: TwitterUserService) { }

  @Process('sendTweet-job')
  async sendTweetJob(job: Job<TwitterUserDTO>) {
    const date = new Date()
    const { username } = job.data
    const service = this.TwitterUserService

    const twitterUser = await service.getUsername(username)

    if (twitterUser) {
      if (datesIsMoreThen24Hours(date, twitterUser.lastTimeNotification)) {
        await service.updateTime(username)
        await postTweet(username)
        console.log('notified and updated')
      } else {
        console.log('already notificated')
      }
      return
    }

    await service.create({
      username,
      lastTimeNotification: date
    })

    await postTweet(username)
    console.log('notified and created')
    return
  }
}

export { SendTweetConsumer };
