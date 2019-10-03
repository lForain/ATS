import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios';
// import querystring from 'querystring';

axios.defaults.baseURL = 'http://localhost:5001';

class Cadastro extends Component {

    inputListener = (event: any) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    onSubmit = (event: any) => {
        event.preventDefault();

        try {
            const response = axios.post('/user', this.state);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col offset-s2">  <h2>Cadastre-se: </h2> </div>

                <div className="row">
                    <form className="col s12" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="name">Nome</label>
                                <input name="name" ref="name" type="text" className="validate" onChange={this.inputListener} />
                            </div>
                            <div className="input-field col s5">
                                <label htmlFor="email">E-mail</label>
                                <input name="email" type="email" className="validate" onChange={this.inputListener} />
                            </div>
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="telefone">Telefone</label>
                                <input name="phone" type="number" className="validate" onChange={this.inputListener} />
                            </div>

                            <div className="input-field col s5">
                                <label htmlFor="dtNascimento">Data Nascimento</label>
                                <input name="birthDate" type="text" className="datepicker" onChange={this.inputListener} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="cpf">CPF</label>
                                <input name="cpf" type="number" className="validate" onChange={this.inputListener} />
                            </div>

                            <div className="input-field col s5">
                                <label htmlFor="endereco">Endereço</label>
                                <input name="adress" type="text" className="validate" onChange={this.inputListener} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="senha">Senha</label>
                                <input name="password" type="password" className="validate" onChange={this.inputListener} />
                            </div>
                            {/* <div className="input-field col s5">
                                <label htmlFor="confSenha">Confirme sua senha</label>
                                <input name="confSenha" type="password" className="validate" onChange={this.inputListener}/>
                            </div> */}
                        </div>
                        <div className="row col offset-s1">
                            <button type="submit" value="submit form" className="waves-effect waves-light btn black">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Cadastro;
