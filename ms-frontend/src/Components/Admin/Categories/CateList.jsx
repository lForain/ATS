import React from 'react';
import { Link } from 'react-router-dom';


export default props => (
    <ul className="collection with-header">
        <li className="collection-header"><h4> { props.liName }</h4>
            <Link to="/cadastrar-categoria"> <i className="small material-icons">add_box</i> <span> Cadastrar Categoria nova </span>  </Link>  
        </li>

        {/* Categoria 1 */}
        <li className="collection-item">
            <Link to="/associar-categoria">
                <div> 
                    <span>Pegar nome da Categoria cadastrada no banco através do node </span> 

                    {/* Icone de Editar  */}
                    <Link to="/atualizar-categoria" className="col"> <i className="material-icons">create</i> </Link>
                    
                    {/* Icone de Deletar */}
                    <Link to="" className="secondary-content" > <i className="small material-icons">delete</i></Link>

                </div> 
            </Link>
        </li>
    </ul>
) 
