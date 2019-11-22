import React from 'react';

class ProductBasketList extends React.Component{
  constructor( props ){
    super( props );
  }

  render(){
    return(
      <div className="col s10 offset-s1">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle"/>
              <span className="title">Title</span>
              <p>Primeira Line <br/>
                Second Line
              </p>
              <a href="#!"><i className="material-icons">grade</i></a>
              <a href="#!"><i className="material-icons">grade</i></a>       
              
          </li>


        </ul>

      </div>

    )

  }

}

export default ProductBasketList;
