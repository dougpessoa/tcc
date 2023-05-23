
import * as dotenv from 'dotenv'
import express from 'express';
import 'express-async-errors';
import { routes } from './routes';
import cors from 'cors';
import mongoose from 'mongoose';
import { errorListener, generateMongoURL } from './utils';

dotenv.config()
const app = express();
const SERVER_PORT = process.env.SERVER_PORT

const DB_USER = process.env.MONGO_USER
const DB_PASSWORD = process.env.MONGO_PASSWORD
const DB_DOMAIN = process.env.MONGO_DOMAIN
const DB_PORT = process.env.MONGO_PORT
export const SEEKER_DOMAIN = process.env.SEEKER_DOMAIN
export const TWITTER_DOMAIN = process.env.TWITTER_DOMAIN

app.use(
  cors({
    allowedHeaders: '*',
  }),
);
app.use(express.json());
app.use(routes);
app.use(errorListener)

mongoose
  .connect(generateMongoURL({
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    domain: DB_DOMAIN
  }))
  .then((response) => {
    app.listen(SERVER_PORT, () => {
      console.log(`server started on http://localhost:${SERVER_PORT}`);
    });
  })
  .catch((error) => {
    console.log('error', error)
  })


