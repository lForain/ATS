import React from 'react';


class AdminDash extends React.Component{
    constructor( props: any ){
        super(props);
    }
    
    render(){
        return(

            <div>
                <div className="row">
                    <div className="col offset-s1 s12">
                        <h1> DashBoard  </h1>
                    </div>
                </div>
                
                
                <div className="row">

                    {/* Lista de Funcionalidades do Administrador */}
                    <div className="col s2">

                        <div className="collection with-header">
                            <ul> <li className="collection-header"> <b> Funcionalidades </b> </li></ul>
                            <a href="#" className="collection-item"> Meus Funcionarios</a>
                            <a href="#" className="collection-item"> Meus Produtos </a>
                            <a href="#" className="collection-item"> outro</a>
                            <a href="#" className="collection-item"> outro</a>
                        </div>

                    </div>


                </div>

            </div>

        )
    }

}

export default AdminDash;