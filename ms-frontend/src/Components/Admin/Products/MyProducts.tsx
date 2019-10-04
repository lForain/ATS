import React from 'react';
import 'material-design-icons';
import { Link } from 'react-router-dom'; 


class MyProducts extends React.Component{

    render(){

        return(
            <div className="row">
                {/* Adicionando link dos icones: */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className="col s11 offset-s1">
                    <h2> DashBoard - Meus Produtos </h2>                  
                    
                </div>

                <div className="row">
                    <div className="col offset-s2 s8">

                        {/* Produtos Vendíveis */}
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Produtos a venda</h4>
                                <Link to="/registrar-produto"> <i className="small material-icons">add_box</i> <span> Cadastrar Produto novo </span>  </Link>  
                            </li>

                            {/* Produto a venda 1 */}
                            <li className="collection-item">
                                <Link to="/ver-produto">
                                    <div> <span> Nome Produto a venda 1 </span> 

                                    {/* Icone de Editar  */}
                                    <Link to="/editar-produto" className="col"> <i className="material-icons">create</i> </Link>

                                    {/* Icone de Deletar */}
                                    <a href="#d" className="secondary-content" > <i className="small material-icons">delete</i></a>

                                    </div> 
                                </Link>
                                    

                            </li>
                            
                            {/* Produto 2  */}
                            <li className="collection-item">
                                <Link to="/ver-produto">
                                    <div> <span> Nome Produto a venda 2 </span> 

                                        {/* Icone de Editar */}
                                        <Link to="/editar-produto" className="col"> <i className="material-icons">create</i> </Link>

                                        {/* Icone de Deletar */}
                                        <a href="#!" className="secondary-content" >  <i className="small material-icons">delete</i> </a>

                                    </div>

                                </Link>        
                            </li>
                        </ul>

                        {/* Produtos Consumiveis  */}
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Produtos Consumíveis</h4>
                                <Link to="/registrar-produto"> <i className="small material-icons">add_box</i> <span> Cadastrar Consumivel novo </span>  </Link> 
                            </li>

                            {/* Produto 1 */}
                            <li className="collection-item">
                                <Link to="/ver-produto">
                                    <div> <span> Nome Produto Consumivel 1 </span> 

                                        {/* Icone de Editar  */}
                                        <Link to="/editar-produto" className="col"> <i className="material-icons">create</i> </Link>

                                        {/* Icone de Deletar */}
                                        <a href="#d" className="secondary-content" > <i className="small material-icons">delete</i></a>

                                    </div> 
                                </Link>
                            </li>
                            
                            {/* Produto Consumivel 2  */}
                            <li className="collection-item">
                                <a href="#2">
                                    <div> <span> Nome Produto Consumivel 2 </span> 

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



export default MyProducts;