import React from 'react';
import ProductBasketList from '../Basket/ProductBasketList';

class Basket extends React.Component{

  constructor( props ){
    super( props );
  }

  render(){
    return(
      <div className="row">
        {/* Adicionando link dos icones: */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

          <div className="col offset-s1">
            <h2> Cesta de Compras: </h2>
          </div>

          <div className="row">
            
              <ProductBasketList />
              <ProductBasketList />
              <ProductBasketList />
              <ProductBasketList />
              <ProductBasketList />
              <ProductBasketList />

            
          </div>

      </div>

    )

  }

}
export default Basket;
