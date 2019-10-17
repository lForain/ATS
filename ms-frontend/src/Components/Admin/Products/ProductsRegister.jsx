import React from 'react';
import axios from 'axios';
import querystring from 'querystring';

axios.defaults.baseURL = 'localhost:3000';

class ProductsRegister extends React.Component{

    inputListener = ( event ) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }    

    onSubmit = ( event ) => {
        event.preventDefault();
        console.log( this.state );

        try{
            const response = axios.post('google.com', querystring.stringify({
                params: this.state
            }));

            console.log( response );
    
        }catch ( error ){
            console.log( error );
        }
    }

    render(){

        return(
            <div className="row">
                
                <div className="col s11 offset-s1">  <h2> Cadastrar Produto </h2> </div>

                <div className="row">

                    {/* Formulário de Cadastro de Produtos */}
                    <form className="col s12" onSubmit={this.onSubmit}>
                        
                        <div className="row">
                            
                            {/* Radio de Produtos( vendivel ) */}
                            <div className="input-field col offset-s1 s2">
                                <label htmlFor="produtoVendivel">    
                                    <input className="with-gap" name="tipoProduto" ref="tipoProduto" type="radio" id="produtoVendivel" onChange={this.inputListener}/>
                                    <span> Produto para venda </span>
                                </label>
                            </div>
                            
                            {/* Radio de Produtos( consumível ) */}
                            <div className="input-field col s2">
                                <label htmlFor="produtoConsumivel"> 
                                    <input className="with-gap" name="tipoProduto" ref="tipoProduto" type="radio" id="produtoConsumivel" onChange={this.inputListener}/>
                                    <span> Produto para consumir </span>
                                </label>
                            </div>

                        </div>

                        <div className="row">

                            {/* Campo nome: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="name">Nome</label>
                                <input name="name" ref="name" type="text" className="validate"  onChange={this.inputListener}/>
                            </div>
                           
                           {/* Campo Descrição: */}
                            <div className="input-field col s4">
                                <label htmlFor="descricao">Descrição</label>
                                <input name="descricao" type="text" className="validate"  onChange={this.inputListener}/>
                            </div>

                            {/* Campo Telefone do Fornecedor: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="telefone">Telefone do Fornecedor</label>
                                <input name="phone" type="number" className="validate" onChange={this.inputListener}/>
                            </div>

                            {/* Campo Email do Fornecedor: */}
                            <div className="input-field col s4">
                                <label htmlFor="emailFornecedor">Email do fornecedor</label>
                                <input name="emailFornecedor" type="email" className="validate" onChange={this.inputListener}/>
                            </div>

                        </div>
                        <div className="row">

                            {/* Campo de Preço de compra do Fornecedor: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="precoCompra">Preço Compra</label>
                                <input name="precoCompra" type="number" className="validate" step="0.01" min="0" onChange={this.inputListener}/>
                            </div>

                            {/* Campo de Preço de venda do fornecedor */}
                            <div className="input-field col s4">
                                <label htmlFor="precoVenda">Preço Venda</label>
                                <input name="precoVenda" type="number" className="validate" step="1" min="0" onChange={this.inputListener}/>
                            </div>

                        </div>
                        
                        <div className="row">

                            {/* Campo nome do Fornecedor */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="nomeFornecedor"> Nome do Fornecedor </label>
                                <input name="nomeFornecedor" type="text" className="validate" onChange={this.inputListener}/>

                            </div>

                            {/* Campo de Quantidade de Produtos */}
                            <div className="input-field col s4">
                                <label htmlFor="quantidade">Quantidade</label>
                                <input name="quantidade" type="number" className="validate" step="1" min="0" onChange={this.inputListener}/>
                            </div>

                        </div>

                        <div className="row">
                            {/* Campo de Upload de fotos do produto */}
                            <div className="file-field input-field col offset-s1 s4">
                                <div className="btn">
                                    <span>Fotos</span>
                                    <input type="file" multiple/>
                                </div>

                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload one or more files" onChange={this.inputListener}/>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="row col offset-s1">
                            <button type="submit" value="submit form" className="waves-effect waves-light btn black">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductsRegister;
