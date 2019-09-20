import React, {Component } from 'react';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'

class Cadastro extends Component{

    submitFormulario = () =>{
        console.log(this.state)
    }

    escutadorDeInput = (event: any)=>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col offset-s2">  <h2>Cadastre-se: </h2> </div>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="name">Nome</label>
                                <input name="name" type="text" className="validate" onChange={this.escutadorDeInput}/>
                            </div>
                            <div className="input-field col s5">
                            <label htmlFor="email">E-mail</label>
                                <input name="email" type="email" className="validate" onChange={this.escutadorDeInput}/>
                            </div>

                        </div>
                        <div className="row">
                            
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="phone">Telefone</label>
                                <input name="phone" type="number" className="validate" onChange={this.escutadorDeInput}/>   
                            </div>

                            <div className="input-field col s5">
                                <label htmlFor="dtNascimento">Data Nascimento</label>
                                <input name="birthDate" type="text" className="datepicker"/>   
                            </div>

                        </div>
                        <div className="row">
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="cpf">CPF</label>
                                <input name="cpf" type="number" className="validate" onChange={this.escutadorDeInput}/>   
                            </div>

                            <div className="input-field col s5">
                                <label htmlFor="endereco">Endereço</label>
                                <input name="adress" type="text" className="validate" onChange={this.escutadorDeInput}/> 
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="input-field col offset-s1 s5">
                                <label htmlFor="senha">Senha</label>
                                <input name="password" type="password" className="validate" onChange={this.escutadorDeInput}/>
                            </div>
                            <div className="input-field col s5">
                                <label htmlFor="confSenha">Confirme a senha</label>
                                <input name="confSenha" type="password" className="validate" onChange={this.escutadorDeInput}/>
                            </div>
                        </div>
                        <div className="row">
                            
                        </div>
                        <div className="row col offset-s1">
                            <button onClick={this.submitFormulario} className="waves-effect waves-light btn black">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Cadastro;