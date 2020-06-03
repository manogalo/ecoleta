import express from 'express';

const app = express();

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

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