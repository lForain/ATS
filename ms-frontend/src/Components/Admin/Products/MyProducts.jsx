import React from 'react';
import 'material-design-icons';
import axios from "axios";
// import { log } from 'util';
// import { any, string } from 'prop-types';
import Product from '../ProdComponents/ProdList';


class MyProducts extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    state = {
        products: [],
    } 

    componentDidMount(){
        console.log('teste');
        axios.get("http://localhost:5001/product")
            .then(res => {
                const products = res.data;
                console.log(products);
                this.setState({ products: products.data });
        });

    }

    render() {
        const products = this.state.products;
        return (
            <div className="row">
                {/* Adicionando link dos icones: */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className="col s11 offset-s1">
                    <h2> DashBoard - Meus Produtos </h2>

                </div>

                <div className="row">
                    <div className="col offset-s2 s8">

                        {/* Produtos Vendíveis */}
                        <Product liName="Produtos Vendíveis"/>
        
                        {/* Produtos Consumiveis  */}
                        <Product liName="Produtos Consumíveis"/>

                    </div>
                </div>
            </div>
        )

    }
}

export default MyProducts;
