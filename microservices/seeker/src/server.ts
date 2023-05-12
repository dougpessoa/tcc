
import * as dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { routes } from './routes';
import cors from 'cors';
import { AppError } from './errors/AppError';

dotenv.config()
const app = express();
const SERVER_PORT = process.env.SERVER_PORT

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


app.listen(SERVER_PORT, () => {
  console.log(`server started on http://localhost:${SERVER_PORT}`);
});

