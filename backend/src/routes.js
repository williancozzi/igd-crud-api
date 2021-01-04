import { Router } from 'express';

const routes = Router();

//URL base is http://localhost:3000/users

routes.get('/users', (request, response) => {
    response.json({ get: '200 OK' });
})

routes.post('/users', (request, response) => {
    response.json({ post: '200 OK' });
})

routes.put('/users', (request, response) => {
    response.json({ put: '200 OK' });
})

routes.delete('/users', (request, response) => {
    response.json({ delete: '200 OK' });
})

export default routes;