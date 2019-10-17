import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css//index.css';
import Cabecalho from './Components/Cabecalho';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SolicitarOrcamento from './Components/SolicitarOrcamento';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminDash from './Components/Admin/AdminDash';
import MyEmployees from './Components/Admin/Employee/MyEmployees';
import EmployeeRegister from './Components/Admin/Employee/EmployeeRegister';
import EmployeesProfile from './Components/Admin/Employee/EmployeesProfile';
import UpdateEmployee from './Components/Admin/Employee/UpdateEmployee';
import MyProducts from './Components/Admin/Products/MyProducts';
import ProductsRegister from './Components/Admin/Products/ProductsRegister';
import UpdateProducts from './Components/Admin/Products/UpdateProducts';
import ProductsProfile from './Components/Admin/Products/ProductsProfile';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Cabecalho />
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/perfil" component={Profile}></Route>
                <Route path="/orcamento" component={SolicitarOrcamento}></Route>
                <Route path="/admin" component={AdminDash}></Route>
                <Route path="/meus-funcionarios" component={MyEmployees}></Route>
                <Route path="/registrar-funcionario" component={EmployeeRegister}></Route>
                <Route path="/ver-funcionario" component={EmployeesProfile}></Route>
                <Route path="/atualizar-funcionario" component={UpdateEmployee}></Route>
                <Route path="/meus-produtos" component={MyProducts}></Route>
                <Route path="/registrar-produto" component={ProductsRegister}></Route>
                <Route path="/editar-produto" component={UpdateProducts}></Route>
                <Route path="/ver-produto" component={ProductsProfile}></Route>
                <Route path="*"></Route>
                
            </Switch>
        </BrowserRouter>
        
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
