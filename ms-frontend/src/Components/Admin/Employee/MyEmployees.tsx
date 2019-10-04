import React from 'react';
import 'material-design-icons';
import { Link } from 'react-router-dom'; 


class MyEmployees extends React.Component{

    render(){

        return(
            <div className="row">
                {/* Adicionando link dos icones: */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className="col s11 offset-s1">
                    <h2> DashBoard - Meus Funcionários </h2>                  
                    
                </div>

                <div className="row">
                    <div className="col offset-s2 s8">

                        {/* Funcionario - Tatuador */}
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Tatuadores</h4>
                                <Link to="/registrar-funcionario"> <i className="small material-icons">add_box</i> <span> Cadastrar Tatuador novo </span>  </Link>  
                            </li>

                            {/* Tatuador 1 */}
                            <li className="collection-item">
                                <Link to="/ver-funcionario">
                                    <div> <span> Nome 1 </span> 

                                    {/* Icone de Editar  */}
                                    <Link to="/atualizar-funcionario" className="col"> <i className="material-icons">create</i> </Link>

                                    {/* Icone de Deletar */}
                                    <a href="#d" className="secondary-content" > <i className="small material-icons">delete</i></a>

                                    </div> 
                                </Link>
                                    

                            </li>
                            
                            {/* Tatuador 2  */}
                            <li className="collection-item">
                                <a href="#2">
                                    <div> <span> Nome 2 </span> 

                                        {/* Icone de Editar */}
                                        <a href="#!" className="col" ><i className="material-icons">create</i></a>

                                        {/* Icone de Deletar */}
                                        <a href="#!" className="secondary-content" >  <i className="small material-icons">delete</i> </a>

                                    </div>

                                </a>        
                            </li>
                        </ul>

                        {/* Funcionario - Atendente */}
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Atendentes</h4>
                                <Link to="/registrar-funcionario"> <i className="small material-icons">add_box</i> <span> Cadastrar Tatuador novo </span>  </Link> 
                            </li>

                            {/* Atendente 1 */}
                            <li className="collection-item">
                                <a href="#1">
                                    <div> <span> Nome 1 </span> 

                                        {/* Icone de Editar  */}
                                        <a href="#c" className="col" > <i className="material-icons">create</i></a>

                                        {/* Icone de Deletar */}
                                        <a href="#d" className="secondary-content" > <i className="small material-icons">delete</i></a>

                                    </div> 
                                </a>
                            </li>
                            
                            {/* Tatuador 2  */}
                            <li className="collection-item">
                                <a href="#2">
                                    <div> <span> Nome 2 </span> 

                                        {/* Icone de Editar */}
                                        <a href="#!" className="col" > <i className="material-icons">create</i> </a>

                                        {/* Icone de Deletar */}
                                        <a href="#!" className="secondary-content" >  <i className="small material-icons">delete</i></a>

                                    </div>

                                </a>        
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



export default MyEmployees;