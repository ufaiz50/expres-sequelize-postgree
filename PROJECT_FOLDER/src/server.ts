//src/server.ts
import app from './app';
import { Database } from './db';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await Database.authenticate();
    console.log('Database connected');
    
    //await Database.sync();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
