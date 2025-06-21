import express from 'express';
import routes from './routes';
import { generateToken } from './middleware/auth.middleware';
import corsConfig from './config/cors.config';

const app = express();

app.use(corsConfig)
app.use(express.json());

app.use('/api', routes);
app.post('/generate-jwt', (req, res) => {
  const { id, username } = req.body;

  if (!id || !username) {
    return res.status(400).json({ message: 'Missing id or username' });
  }
  const token = generateToken({ id, username }, 7200);
  return res.json({ token });
});


export default app;
