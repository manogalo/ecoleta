import express from 'express';

const app = express();

app.use(express.json());

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request params = Parâmetros enviados na própria rota que identificam um recurso
// Query params = Parâmetros enviados na própria rota, geralmente opcionais, para filtros, paginação, etc (separados por "?")
// Request body = Parâmetros para criação e atualização de informações enviados no corpo da requisição

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users',(request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.send(filteredUsers);
});

app.get('/user/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
});

app.listen(3333);