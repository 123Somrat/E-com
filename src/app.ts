import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()


// EXpress app
const app = express();


// Middleware for cors and pasrse req body
app.use(express.json());
app.use(cors());



// Appliication Health cheakUp Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    health: 'OK',
  });
});

export default app;
