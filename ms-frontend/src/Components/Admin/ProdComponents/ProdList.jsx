import React from 'react';
import { Link } from 'react-router-dom';


export default props => (
  <ul className="collection with-header">
      <li className="collection-header"><h4>{props.liName}</h4>
          <Link to="/registrar-produto"> <i className="small material-icons">add_box</i> <span> Cadastrar Produto novo </span>  </Link>
      </li>

      {/* Produto a venda 1 */}
      <li className="collection-item">
          <Link to="/ver-produto">
              <div> <span> </span>

                  {/* Icone de Editar  */}
                  <Link to="/editar-produto" className="col"> <i className="material-icons">create</i> </Link>

                  {/* Icone de Deletar */}
                  <Link to="" className="secondary-content" > <i className="small material-icons">delete</i></Link>

              </div>
          </Link>
      </li>
  </ul>
) 
