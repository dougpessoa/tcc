
import * as dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { routes } from './routes';
import cors from 'cors';
import mongoose from 'mongoose';
import { AppError } from './errors/AppError';

dotenv.config()
const app = express();
const SERVER_PORT = process.env.SERVER_PORT

const DB_USER = process.env.MONGO_USER
const DB_PASSWORD = process.env.MONGO_PASSWORD
const DB_DOMAIN = process.env.MONGO_DOMAIN
const DB_PORT = process.env.MONGO_PORT

app.use(
  cors({
    allowedHeaders: '*',
  }),
);
app.use(express.json());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Desculpe, houve um erro interno no servidor.',
      err,
    });
  },
);

mongoose
  .connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_DOMAIN}:${DB_PORT}/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2`)
  .then((response) => {
    app.listen(SERVER_PORT, () => {
      console.log(`server started on http://localhost:${SERVER_PORT}`);
    });
  })
  .catch((error) => {
    console.log('error')
  })


