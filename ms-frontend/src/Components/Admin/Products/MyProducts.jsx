import React from 'react';
import 'material-design-icons';
import { Link } from 'react-router-dom';
import axios from "axios";
import { log } from 'util';
import { any, string } from 'prop-types';
import ProdVenda from '../ProdComponents/ProdList';

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

                        {/* Produtos Vendáveis */}
                        <ProdVenda liName="Produtos Vendíveis"/>
""
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
                                        <Link to="" className="secondary-content" > <i className="small material-icons">delete</i></Link>

                                    </div>
                                </Link>
                            </li>

                            {/* Produto Consumivel 2  */}
                            <li className="collection-item">
                                <Link to="ver-produto">
                                    <div> <span> Nome Produto Consumivel 2 </span>

                                        {/* Icone de Editar */}
                                        <Link to="/editar-produto" className="col"> <i className="material-icons">create</i> </Link>

                                        {/* Icone de Deletar */}
                                        <Link to="" className="secondary-content" > <i className="small material-icons">delete</i></Link>

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

export default MyProducts;
