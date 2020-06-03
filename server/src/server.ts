import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.use(routes);

app.listen(3333);