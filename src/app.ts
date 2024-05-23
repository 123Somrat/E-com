import express, { NextFunction, Request, Response } from 'express';
import applyMiddleware from './middleware';
import HttpError from './utils/customError';

// EXpress app
const app = express();
applyMiddleware(app);

// Appliication Health cheakUp Route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    health: 'OK',
  });
});

app.use((err: HttpError, _req: Request, res: Response, next: NextFunction) => {
  next();
  if (err instanceof HttpError && err.status === 404) {
    // If product not found then send not found error
    res.status(404).json({
      status: '404',
      code: err.code,
      message: err.message,
    });
  } else {
    // For other errors, send internal server error
    res.status(500).json({
      status: '500',
      code: 'Internal Server Error',
      message: 'An unexpected error occurred.',
    });
  }
});

export default app;
