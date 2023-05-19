import { Module } from '@nestjs/common';
import { NotifierUserController } from './controller/notifier-user.controller';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';
import { SendTwitterProducerService } from './jobs/send-twitter-producer-service';
import { SendTweetConsumer } from './jobs/send-twitter-consumer';
import { MongooseModule } from '@nestjs/mongoose';
import { generateMongoURL } from './utils';
import { TwitterUserSchema } from 'src/schemas/twitter-user.schema';
import { TwitterUserService } from './services/twitter-user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      generateMongoURL({
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        domain: process.env.MONGO_DOMAIN,
        port: process.env.MONGO_PORT,
      }),
    ),
    MongooseModule.forFeature([
      { name: 'TwitterUserName', schema: TwitterUserSchema },
    ]),
    BullModule.registerQueue({
      name: 'sendTweet-queue',
    }),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    }),
  ],
  controllers: [NotifierUserController],
  providers: [
    SendTweetConsumer,
    SendTwitterProducerService,
    TwitterUserService,
  ],
})

// eslint-disable-next-line prettier/prettier
export class AppModule { }
