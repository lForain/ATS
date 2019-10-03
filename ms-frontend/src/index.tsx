import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css//index.css';
import Cabecalho from './Components/Cabecalho';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SolicitarOrcamento from './Components/SolicitarOrcamento';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Cabecalho />
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/perfil" component={Profile}></Route>
                <Route path="/orcamento" component={SolicitarOrcamento}></Route>
                <Route path="*"></Route>
            </Switch>
        </BrowserRouter>
        
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
