import express, { Request, Response } from 'express';
import applyMiddleware from './middleware';

// EXpress app
const app = express();
applyMiddleware(app);

// Appliication Health cheakUp Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    health: 'OK',
  });
});

export default app;
