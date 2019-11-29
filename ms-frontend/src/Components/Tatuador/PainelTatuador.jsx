import React from 'react';
import { Link } from 'react-router-dom';

class PainelTatuador extends React.Component{
    constructor( props ){
        super(props);
    }
    
    render(){
        return(

            <div>
                <div className="row">
                    <div className="col offset-s1 s12">
                        <h1> Painel do Tatuador  </h1>
                    </div>
                </div>
                
                
                <div className="row">

                    {/* Lista de Funcionalidades do Administrador */}
                    <div className="col s2">

                        <div className="collection with-header">
                            <ul> <li className="collection-header"> <b> Funcionalidades </b> </li>
                                <li className="collection-item"> <Link to="/meus-orcamentos"> <span> Meus Orçamentos </span> </Link> </li>              
                            </ul>
                
                        </div>
                        
                    </div>

                </div>
 
            </div>
        )
    }

}

export default PainelTatuador;
