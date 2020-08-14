import express from 'express';
import cors from 'cors';

import { resolve } from 'path';

import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.midlewares();
    this.routes();
  }

  midlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use(
      '/uploads',
      express.static(resolve(__dirname, '..', 'temp', 'uploads')),
    );
  }

  routes(): void {
    this.app.use(routes);
  }
}

export default new App().app;
