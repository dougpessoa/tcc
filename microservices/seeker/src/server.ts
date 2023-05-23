
import * as dotenv from 'dotenv'
import express from 'express';
import 'express-async-errors';
import { routes } from './routes';
import cors from 'cors';
import { errorListener } from './utils';

dotenv.config()
const app = express();
const SERVER_PORT = process.env.SERVER_PORT

app.use(
  cors({
    allowedHeaders: '*',
    origin: '*'
  }),
);
app.use(express.json());
app.use(routes);
app.use(errorListener);

app.listen(SERVER_PORT, () => {
  console.log(`server started on http://localhost:${SERVER_PORT}`);
});

