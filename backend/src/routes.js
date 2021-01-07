import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.getById);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);

export default routes;