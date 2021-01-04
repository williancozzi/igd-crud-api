import express from 'express';
import routes from './routes'

const app = express();

app.use(routes);

app.listen(3000, () => {
    console.log("API started on port 3000!");
});