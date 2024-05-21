import express, { Application } from 'express';
import cors from 'cors';
import router from '../router';

const applyMiddleware = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(router);
};

export default applyMiddleware;
