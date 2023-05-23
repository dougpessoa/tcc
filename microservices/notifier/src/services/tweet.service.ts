import { PostTweetResponseTypes } from 'src/types';
import { TwitterApi } from 'twitter-api-v2';

async function postTweet(username: string): Promise<PostTweetResponseTypes> {
  try {
    const client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_KEY_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });

    const rwClient = client.readWrite;

    const response = await rwClient.v2.tweet(
      `Hello @${username}, you have an message on our platform!!!`,
    );

    return {
      sent: true,
      response,
    };
  } catch (error) {
    return {
      sent: false,
      error,
    };
  }
}

export { postTweet };
