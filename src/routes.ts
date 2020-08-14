import { Router } from 'express';

const routes = Router();

import PhotoMidleware from './app/middlewares/file';

import FileController from './app/controllers/FIleController';

routes.post('/photos', PhotoMidleware, FileController.store);

export default routes;
