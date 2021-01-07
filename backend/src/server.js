import express from 'express';
import routes from './routes'
import cors from 'cors';

import './database/main'
import './database/migrations/20210105004446-create-users'

const app = express();


app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log("API started on port 3000!");
});