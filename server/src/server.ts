import express from 'express';

const app = express();

app.get('/users',(request, response) => {
    console.log('listagem de usuários');

    response.send([
        'Diego',
        'Clayton',
        'Robson',
        'Johnny'
    ]);
});

app.listen(3333);