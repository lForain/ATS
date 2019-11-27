import React from 'react';
import SearchInput from './SearchInput';
import ProductCard from './ProductCard';
// import MediaCard from './ProductCard';


class Shop extends React.Component{
  constructor( props ){
    super( props );
  
  }


  render(){
    return(
      <div>
        
        {/* Adicionando link dos icones: */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

        <div className="row">
          <h2 className="col offset-s1"> Loja </h2>
        </div>

        {/* Botão de Busca */}
        < SearchInput />

        {/* Lista de Card de Produtos */}
        <ul>
          <div className="row">
            <li> <div className="col s3 offset-s1"> < ProductCard /> </div> </li>              
            <li> <div className="col s3"> < ProductCard /> </div> </li>
            <li> <div className="col s3"> < ProductCard /> </div> </li>            
          </div>   

          <div className="row">
            <li> <div className="col s3 offset-s1"> < ProductCard /> </div> </li> 
            <li> <div className="col s3"> < ProductCard /> </div> </li>
            <li> <div className="col s3"> < ProductCard /> </div> </li>
          </div>

          <div className="row">
            <li> <div className="col s3 offset-s1"> < ProductCard /> </div> </li> 
            <li> <div className="col s3"> < ProductCard /> </div> </li>
            <li> <div className="col s3"> < ProductCard /> </div> </li>
          </div>     

        </ul>    
      
      </div>
    )
  }
}
export default Shop;
