import express from 'express';
import routes from './routes';
import { generateToken } from './middleware/auth.middleware';

const app = express();
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
