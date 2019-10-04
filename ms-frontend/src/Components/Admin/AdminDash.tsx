import React from 'react';
import { Link } from 'react-router-dom';

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
                            <ul> <li className="collection-header"> <b> Funcionalidades </b> </li>
                                <li className="collection-item"> <Link to="/meus-funcionarios"> <span> Meus Funcionários </span> </Link> </li>
                                <li className="collection-item"> <Link to="/meus-produtos"> <span> Meus Produtos </span> </Link> </li>
                                <li className="collection-item"> <Link to="/"> <span> outros </span> </Link> </li>
                                <li className="collection-item"> <Link to="/"> <span> outros </span> </Link> </li>                
                            </ul>
                
                        </div>
                        
                    </div>

                </div>
 
            </div>
        )
    }

}

export default AdminDash;