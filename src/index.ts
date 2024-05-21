import http from 'http';
import app from './app';
import dotenv from 'dotenv';
import connectWithDB from './db';

dotenv.config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const main = async () => {
  try {
     await connectWithDB()
    server.listen(port, async () => {
      console.log(`Express server is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
