import express, { Request, Response } from 'express';
import applyMiddleware from './middleware';
import HttpError from './utils/customError';

// EXpress app
const app = express();
applyMiddleware(app);

// Appliication Health cheakUp Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    health: 'OK',
  });
});


app.use((err: HttpError, req:Request, res:Response) => {
  res.status(err.status || 500).json({
      status: err.status || '500',
      code: err.code || 'Internal Server Error',
      message: err.message,
  });
});





export default app;
