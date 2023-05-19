import { TweetV2PostTweetResult } from 'twitter-api-v2';

export type GenerateMongoURLProps = {
  port: string;
  domain: string;
  user: string;
  password: string;
};

export type PostTweetResponseTypes = {
  sent: boolean;
  response?: TweetV2PostTweetResult;
  error?: any;
};
