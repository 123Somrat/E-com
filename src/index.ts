import http from 'http';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, async () => {
  console.log(`Express server is listening at http://localhost:${port}`);
});
