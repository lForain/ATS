import React from 'react';
import 'materialize-css/dist/js/materialize';


class UpdateEmployee extends React.Component{

    constructor( props ){
        super(props);
    }


    render(){

        return(
            
            <div className="row">
                <div className="col s11 offset-s1">  <h2> Atualizar Funcionário </h2> </div>

                <div className="row">

                    {/* Formulário de Cadastro de Funcionários */}
                    <form className="col s12">
                        
                        <div className="row">
                            
                            {/* Radio de Tatuador */}
                            <div className="input-field col offset-s1 s2">
                                <label htmlFor="tatuador">    
                                    <input className="with-gap" name="tipoFuncionario" type="radio" id="tatuador" disabled/>
                                    <span> Tatuador </span>
                                </label>
                            </div>
                            
                            {/* Radio de Atendente */}
                            <div className="input-field col s2">
                                <label htmlFor="atendente"> 
                                    <input className="with-gap" name="tipoFuncionario" type="radio" id="atendente" disabled/>
                                    <span> Atendente </span>
                                </label>
                            </div>

                        </div>

                        <div className="row">

                            {/* Campo nome: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="name">Nome</label>
                                <input name="name" ref="name" type="text" className="validate"  />
                            </div>
                           
                           {/* Campo Email: */}
                            <div className="input-field col s4">
                                <label htmlFor="email">E-mail</label>
                                <input name="email" type="email" className="validate"  />
                            </div>

                            {/* Campo Telefone: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="telefone">Telefone</label>
                                <input name="phone" type="number" className="validate" />
                            </div>

                            {/* Campo Data de Nascimento: */}
                            <div className="input-field col s4">
                                <label htmlFor="dtNascimento">Data Nascimento</label>
                                <input name="birthDate" type="text" className="datepicker" />
                            </div>

                        </div>
                        <div className="row">

                            {/* Campo de CPF */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="cpf">CPF</label>
                                <input name="cpf" type="number" className="validate" />
                            </div>

                            {/* Campo Endereço: */}
                            <div className="input-field col s4">
                                <label htmlFor="endereco">Endereço</label>
                                <input name="adress" type="text" className="validate"  />
                            </div>

                        </div>
                        <div className="row">

                            {/* Campo Senha: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="senha">Senha</label>
                                <input name="password" type="password" className="validate" />
                            </div>
                            
                            {/* Campo Confirmar Senha: */}
                            <div className="input-field col s4">
                                <label htmlFor="confSenha">Confirme sua senha</label>
                                <input name="confSenha" type="password" className="validate" />
                            </div> 
                        </div>
                        
                        <div className="row col offset-s1">
                            <button type="submit" value="submit form" className="waves-effect waves-light btn black">Atualizar</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default UpdateEmployee;
