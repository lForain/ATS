import React from "react";
import "material-design-icons";
import { Link } from "react-router-dom";


class MyCategories extends React.Component{

    constructor( props ){
        super( props );
    }


    render(){


        return(
            <div className="row"> 
                {/* Adicionando link dos icones: */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

                <div className="col offset-s1"> 
                    <h2> Minhas Categorias </h2>
                </div>

                <div className="row">
                    <div className="col offset-s2 s8">

                        {/* Lista de Categorias*/}
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Categorias</h4>
                                <Link to="/registrar-categoria"> <i className="small material-icons">add_box</i> <span> Cadastrar Categoria nova </span>  </Link>  
                            </li>

                            {/* Categoria 1 */}
                            <li className="collection-item">
                                <Link to="/ver-categoria">
                                    <div> <span> Nome Categoria 1 </span> 

                                    {/* Icone de Editar  */}
                                    <Link to="/atualizar-categoria" className="col"> <i className="material-icons">create</i> </Link>

                                    {/* Icone de Deletar */}
                                    <Link to="" className="secondary-content" > <i className="small material-icons">delete</i></Link>

                                    </div> 
                                </Link>
                            </li>
                            
                            {/* Categoria 2  */}
                            <li className="collection-item">
                                <Link to="/ver-categoria">
                                    <div> <span> Nome Categoria 2 </span> 

                                        {/* Icone de Editar */}
                                        <Link to="/atualizar-categoria" className="col" ><i className="material-icons">create</i></Link>

                                        {/* Icone de Deletar */}
                                        <Link to="" className="secondary-content" >  <i className="small material-icons">delete</i> </Link>

                                    </div>

                                </Link>        
                            </li>

                             {/* Categoria 3  */}
                             <li className="collection-item">
                                <Link to="/ver-categoria">
                                    <div> <span> Nome Categoria 3 </span> 

                                        {/* Icone de Editar */}
                                        <Link to="/atualizar-categoria" className="col" ><i className="material-icons">create</i></Link>

                                        {/* Icone de Deletar */}
                                        <Link to="" className="secondary-content" >  <i className="small material-icons">delete</i> </Link>

                                    </div>

                                </Link>        
                            </li>

                             {/* Categoria 4 */}
                             <li className="collection-item">
                                <Link to="/ver-categoria">
                                    <div> <span> Nome Categoria 4 </span> 

                                        {/* Icone de Editar */}
                                        <Link to="/atualizar-categoria" className="col" ><i className="material-icons">create</i></Link>

                                        {/* Icone de Deletar */}
                                        <Link to="" className="secondary-content" >  <i className="small material-icons">delete</i> </Link>

                                    </div>

                                </Link>        
                            </li>

                        </ul>
                    

                    </div>
                </div>
            </div>

        )
    
    }

}

export default MyCategories;