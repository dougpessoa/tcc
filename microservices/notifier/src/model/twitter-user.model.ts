import { Document } from 'mongoose';

export class TwitterUserModel extends Document {
  username: string;
  lastTimeNotification: Date;
}
