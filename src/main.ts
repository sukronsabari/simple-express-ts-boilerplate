import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { limiter } from './app/middlewares/rate-limiter.middleware';
import { router } from './api/notes.route';

const app = express();
const port = 5500;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json({ type: 'application/json' }));
app.use(limiter);
app.use(morgan('dev'));

// app.get('/', (req, res) => res.send('Hello World!'));
app.use('/notes', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
