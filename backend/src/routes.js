import { Router } from 'express';

const routes = Router();

// URL base: http://localhost:3000/users
// query format: users/?<key>=<value> 
// http://localhost:3000/users?nome=Willian 

routes.get('/users', (req, res) => {
    const query = req.query;

    console.log(query);

    res.json({ get: '200 OK' });
})

routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    res.json({ post: '200 OK' });
})

routes.put('/users/:id', (req, res) => {
    const params = req.params;

    console.log(params);

    res.json({ put: '200 OK' });
})

export default routes;