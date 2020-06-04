import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/temp', express.static(path.resolve(__dirname, '..', 'temp')));

app.listen(3333);