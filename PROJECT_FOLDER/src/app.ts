import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../docs/swagger';
import routes from './routes';
import { generateJWTToken } from './utils/appHelpers';
import corsConfig from './config/cors.config';
import { JwtPayloadDto } from './dtos/auth/jwt.dto';

const app = express();

app.use(corsConfig)
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);
app.post('/generate-jwt', (req, res) => {
  const payload: JwtPayloadDto = req.body;
  if (!payload.id || !payload.username) {
    return res.status(400).json({ message: 'Missing id or username' });
  }

  const token = generateJWTToken(payload, 7200);
  return res.json({ token });
});


export default app;
