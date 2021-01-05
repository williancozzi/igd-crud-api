import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.getById);

export default routes;