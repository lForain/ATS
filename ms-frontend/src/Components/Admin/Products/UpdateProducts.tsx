import React from 'react';

class UpdateProducts extends React.Component{

    render(){

        return(
            <div className="row">
                <div className="col s11 offset-s1">  <h2> Editar Produto </h2> </div>

                <div className="row">

                    {/* Formulário de Cadastro de Produtos */}
                    <form className="col s12">
                        
                        <div className="row">
                            
                            {/* Radio de Produtos( vendivel ) */}
                            <div className="input-field col offset-s1 s2">
                                <label htmlFor="produtoVendivel">    
                                    <input className="with-gap" name="tipoProduto" type="radio" id="produtoVendivel"/>
                                    <span> Produto para venda </span>
                                </label>
                            </div>
                            
                            {/* Radio de Produtos( consumível ) */}
                            <div className="input-field col s2">
                                <label htmlFor="produtoConsumivel"> 
                                    <input className="with-gap" name="tipoProduto" type="radio" id="produtoConsumivel"/>
                                    <span> Produto para consumir </span>
                                </label>
                            </div>

                        </div>

                        <div className="row">

                            {/* Campo nome: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="name">Nome</label>
                                {/* Atualizar com backend */}
                                <input name="name" ref="name" type="text" className="validate"  />
                            </div>
                        
                        {/* Campo Descrição: */}
                            <div className="input-field col s4">
                                <label htmlFor="descricao">Descrição</label>
                                {/* Atualizar com backend */}
                                <input name="descricao" type="text" className="validate"  />
                            </div>

                            {/* Campo Telefone do Fornecedor: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="telefone">Telefone do Fornecedor</label>
                                {/* Atualizar com backend */}
                                <input name="phone" type="number" className="validate" />
                            </div>

                            {/* Campo Email do Fornecedor: */}
                            <div className="input-field col s4">
                                <label htmlFor="emailFornecedor">Email do fornecedor</label>
                                {/* Atualizar com backend */}
                                <input name="emailFornecedor" type="email" className="validate" />
                            </div>

                        </div>
                        <div className="row">

                            {/* Campo de Preço de compra do Fornecedor: */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="precoCompra">Preço Compra</label>
                                {/* Atualizar com backend */}
                                <input name="precoCompra" type="number" className="validate" step="0.01" min="0" />
                            </div>

                            {/* Campo de Preço de venda do fornecedor */}
                            <div className="input-field col s4">
                                <label htmlFor="precoVenda">Preço Venda</label>
                                {/* Atualizar com backend */}
                                <input name="precoVenda" type="number" className="validate" step="1" min="0" />
                            </div>

                        </div>
                        
                        <div className="row">

                            {/* Campo nome do Fornecedor */}
                            <div className="input-field col offset-s1 s4">
                                <label htmlFor="nomeFornecedor"> Nome do Fornecedor </label>
                                <input name="nomeFornecedor" type="text" className="validate"/>

                            </div>
                            

                            {/* Campo de Quantidade de Produtos */}
                            <div className="input-field col s4">
                                <label htmlFor="quantidade">Quantidade</label>
                                <input name="quantidade" type="number" className="validate" step="1" min="0" />
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
                                    <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
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

export default UpdateProducts;