import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'
import Toast from './components/toast';
import checkIcon from './assets/check.svg'
import errorIcon from './assets/x-circle.svg'
import infoIcon from './assets/info.svg'
import warningIcon from './assets/alert-octagon.svg'

const Routes = () => {

    const testList = [
        {
            id: 1,
            title: 'Ok.',
            description: 'Ponto de coleta cadastrado com sucesso.',
            backgroundColor: '#5cb85c',
            icon: checkIcon
        },
        {
            id: 2,
            title: 'Atenção.',
            description: 'Houve algum problema no cadastro do ponto de coleta.',
            backgroundColor: '#f0ad4e',
            icon: warningIcon
        },
        {
            id: 3,
            title: 'Erro.',
            description: 'Tivemos um erro no cadastro do ponto de coleta.',
            backgroundColor: '#d9534f',
            icon: errorIcon
        },
        {
            id: 4,
            title: 'Informação.',
            description: 'This is an info toast.',
            backgroundColor: '#5bc0de',
            icon: infoIcon
        }
    ]
    return (
        <BrowserRouter>
            <Toast 
                toastList={testList}
                position="top-right"
            />
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    );
}

export default Routes;