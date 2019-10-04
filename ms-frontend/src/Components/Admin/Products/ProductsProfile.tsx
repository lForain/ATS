import React from 'react';

class ProductsProfile extends React.Component{

    render(){


        return(
            <div className="row">
                <div className="col s11 offset-s1">  <h2> Perfil Produto </h2> </div>

                <div className="row">

                    {/* Formulário de Cadastro de Produtos */}
                    <form className="col s12">
                        
                        <div className="row">
                            
                            {/* Radio de Produtos( vendivel ) */}
                            <div className="input-field col offset-s1 s2">
                                <label htmlFor="produtoVendivel">    
                                    <input className="with-gap" name="tipoProduto" type="radio" id="produtoVendivel" disabled/>
                                    <span> Produto para venda </span>
                                </label>
                            </div>
                            
                            {/* Radio de Produtos( consumível ) */}
                            <div className="input-field col s2">
                                <label htmlFor="produtoConsumivel"> 
                                    <input className="with-gap" name="tipoProduto" type="radio" id="produtoConsumivel" disabled/>
                                    <span> Produto para consumir </span>
                                </label>
                            </div>

                        </div>

                        <div className="row">

                            {/* Campo nome: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="name">Nome</label>
                                {/* Atualizar com backend */}
                                <input name="name" ref="name" type="text" className="validate"  disabled/>
                            </div>
                        
                        {/* Campo Descrição: */}
                            <div className="input-field col s4">
                                <label htmlFor="descricao">Descrição</label>
                                {/* Atualizar com backend */}
                                <input name="descricao" type="text" className="validate" disabled />
                            </div>

                            {/* Campo Telefone do Fornecedor: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="telefone">Telefone do Fornecedor</label>
                                {/* Atualizar com backend */}
                                <input name="phone" type="number" className="validate" disabled/>
                            </div>

                            {/* Campo Email do Fornecedor: */}
                            <div className="input-field col s4">
                                <label htmlFor="emailFornecedor">Email do fornecedor</label>
                                {/* Atualizar com backend */}
                                <input name="emailFornecedor" type="email" className="validate" disabled/>
                            </div>

                        </div>
                        <div className="row">

                            {/* Campo de Preço de compra do Fornecedor: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="precoCompra">Preço Compra</label>
                                {/* Atualizar com backend */}
                                <input name="precoCompra" type="number" className="validate" step="0.01" min="0" disabled/>
                            </div>

                            {/* Campo de Preço de venda do fornecedor */}
                            <div className="input-field col s4">
                                <label htmlFor="precoVenda">Preço Venda</label>
                                {/* Atualizar com backend */}
                                <input name="precoVenda" type="number" className="validate" step="1" min="0" disabled/>
                            </div>

                        </div>
                        
                        <div className="row">

                            {/* Campo nome do Fornecedor */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="nomeFornecedor"> Nome do Fornecedor </label>
                                <input name="nomeFornecedor" type="text" className="validate" disabled/>

                            </div>

                            {/* Campo de Quantidade de Produtos */}
                            <div className="input-field col s4">
                                <label htmlFor="quantidade">Quantidade</label>
                                <input name="quantidade" type="number" className="validate" step="1" min="0" disabled/>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>
        )

    }

}

export default ProductsProfile;