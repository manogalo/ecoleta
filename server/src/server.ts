import express from 'express';

const app = express();

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request.params = Parâmetros enviados na própria rota que identificam um recurso

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users',(request, response) => {
    console.log('listagem de usuários');

    response.send(users);
});

app.get('/user/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    };

    return response.json(users);
});

app.listen(3333);