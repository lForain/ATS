import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css//index.css';
import Cabecalho from './Components/Cabecalho';
import Login from './Components/Login';
import Cadastro from './Components/Cadastro';
// import SolicitarOrcamento from './Components/SolicitarOrcamento';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Cabecalho />
        <Login />
        <Cadastro />
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
