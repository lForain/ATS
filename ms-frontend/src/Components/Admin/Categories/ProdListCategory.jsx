import React from 'react';
import axios from "axios";
import Produtos from '../ProdComponents/ProdCategoryAssociation';
 

class ProdListCategory extends React.Component{

    constructor( props ){
        super( props );
    }

    state = {
        products: [],
    } 

    componentDidMount(){
        console.log('foi');
        axios.get("http://localhost:5001/product")
            .then(res => {
                const products = res.data;
                console.log(products);
                this.setState({ products: products.data });
        });

    }


    render(){

        return(

            <div className="row">
                <div className="col s11 offset-s1">
                    <h2> Categoria X - Lista Produtos Associados </h2>
                </div>

                <div className="row">
                    
                    <form>
                        <div className="col s8 offset-s2">
                            
                            {/* Lista de Produtos*/}
                            < Produtos liName="Produtos Vendíveis" />                    
                            
                        </div>

                        <div className="row">
                            <div className="col offset-s2">
                                <button onClick={ this.onSubmit } className="waves-effect waves-light btn black">Salvar Alterações</button>
                            </div>
                        </div>
                        
                        <div className="col s8 offset-s2">
                            
                            {/* Lista de Produtos*/}
                            < Produtos liName="Produtos Consumíveis" />
                            
                        </div>
                        
                        <div className="row">
                            <div className="col offset-s2">
                                <button onClick={ this.onSubmit } className="waves-effect waves-light btn black">Salvar Alterações</button>
                            </div>
                        </div>
                        
                    </form>                  

                </div>

            </div>

        )

    }



}

export default ProdListCategory;