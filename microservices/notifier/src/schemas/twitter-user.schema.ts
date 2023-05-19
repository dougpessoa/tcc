import * as mongoose from 'mongoose';

export const TwitterUserSchema = new mongoose.Schema({
  username: String,
  lastTimeNotification: Date,
});
