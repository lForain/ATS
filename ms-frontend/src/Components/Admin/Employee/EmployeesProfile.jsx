import React from 'react';

class EmployeesProfile extends React.Component{

    constructor( props ){
        super( props );
        
        // pegar estado do backend 
        this.state = { value: '' };
    }

    render(){
        return(
            <div className="row">
                <div className="col offset-s2"> <h2> Perfil Funcionário </h2> </div> 
                
                <form className="col s12">  
                    
                    {/* Campo Nome: */}
                    <div className="row">
                        <div className="input-field col offset-s2 s6">
                            <label htmlFor="name">Nome</label>

                            {/* Atualizar o value: com o valor que tiver no backend */}
                            <input disabled name="name" type="text" className="validate" value="" />
                        </div>
                    </div>

                    {/* Campo de Email */}
                    <div className="row">
                        <div className="input-field col offset-s2 s6">
                            <label htmlFor="email">E-mail</label>

                            {/* Atualizar o value: com o valor que tiver no backend */}
                            <input disabled name="email" type="email" className="validate" value="" />
                        </div>

                    </div>
                    
                    {/* Campo de Telefone */}
                    <div className="row">
                        <div className="input-field col offset-s2 s6">
                            <label htmlFor="phone">Telefone</label>

                            {/* Atualizar o value: com o valor que tiver no backend */}
                            <input disabled name="phone" type="number" className="validate" value="" />
                        </div>

                    </div>

                    {/* Campo de Endereço */}
                    <div className="row">
                        <div className="input-field col offset-s2 s6">
                            <label htmlFor="address">Endereco</label>

                            {/* Atualizar o value: com o valor que tiver no backend */}
                            <input disabled name="address" type="text" className="validate" value="" />
                        </div>

                    </div>

                    {/* Campo de CPF */}
                    <div className="row">
                        <div className="input-field col offset-s2 s6">
                            <label htmlFor="cpf">CPF</label>

                            {/* Atualizar o value: com o valor que tiver no backend */}
                            <input disabled name="cpf" type="number" className="validate" value="" />
                        </div>

                    </div>

                    {/* Campo Data de Nascimento */}
                    <div className="row">
                        <div className="input-field col offset-s2 s6">
                            <label htmlFor="birthdate">Data Nascimento</label>

                            {/* Atualizar o value: com o valor que tiver no backend */}
                            <input disabled name="birthdate" type="text" className="validate" value="" />
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default EmployeesProfile;
