import React from 'react';

class ProductCard extends React.Component{
  constructor( props ){
    super( props );

    this.state = {
      name: "Nome Produto!",
      description: "Teste de Descrição Lorem Ipsum! Meu pastel é mais barato! Mengão Campeão Mundial! ",
      qtd: 0,
      imgSrc: "",
      categories: []

    };


  }

  render(){
    return(
      <div>
        <div className="card">

          <div className="card-image">
            {/* Imagem do produto */}
            <img src= { this.state.imgSrc } alt="Imagem de um produto"/>
              
            {/* Nome do Título = Nome do produto */}
            <span className="card-title"> { this.state.name } </span>    
          </div>
                    
          <div className="card-content">
            {/* Descrição do Produto */}
            <p> { this.state.description } </p>
            
            {/* Quantidade em Estoque */}
            <p> Quantidade: <b> { this.state.qtd } </b> </p>

            {/* Categorias -- TODO: Como fazer um css desse arquivo aqui para estilizar essas divs */}
            <div className="cateogory" id="category1"> Categoria 1 </div> <div className="category" id="category2">  Categoria 2  </div>

            {/* Botão de retirar do carrinho */}
            <a className="btn-floating waves-effect waves-light green"><i className="material-icons">remove</i></a>

            {/* Botão de adicionar no carrinho */}
            <a className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductCard;
