import React from 'react'; 
import 'materialize-css/dist/js/materialize';
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios";
// import { throwStatement } from '@babel/types';
// import $ from 'jquery';

class ResponderOrcamento extends React.Component {
    constructor( props ){
        super(props);
        this.state = { value: "1" };

        this.onSubmit = this.onSubmit.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    onSubmit = ( event ) => {
        event.preventDefault();
        try {
            axios.post('http://localhost:5001/emailsender').then(resp => console.log(`Response: ${JSON.stringify(resp)}`))
        } catch (error) {
            console.log(error);
        }
    }

    inputListener = ( event ) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    } 



    render(){
        return (

            <div className="row">
                
                {/* Adicionando link para usar o icone do lapis no textArea */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                
                <div className="col offset-s1"> <h2> Solicitação de orçamento: </h2> </div>
                <div className="row">  

                    <p>Eu gostaria de fazer um dragão nas costas, com tamanho de aproximadamente 50 cm</p>

                    <form className="col s12">

                        {/* Texto para descrição da imagem contendo informações adicionais sobre a tatuagem: tamanho, localização, etc. */}
                        <div className="row">
                            <div className="col s4 offset-s2">
                                <div className="input-field">                         

                                    <i className="material-icons prefix"> create </i>
                                    <textarea id="icon_prefix2" className="materialize-textarea"  placeholder="Escreva o orçamento aqui"></textarea>
                                    <label htmlFor="icon_prefix2">Orçamento</label>
                                </div>
                            </div>
                        </div>

                        
                        {/* Botão de solicitar Orçamento */}
                        <div className="row">
                            <div className="col offset-s2">
                                <button onClick={ this.onSubmit } className="waves-effect waves-light btn black">Enviar Orçamento</button>
                            </div>
                        </div>
                        {/* <input type="submit" value="submit" onChange={ this.inputListener } /> */}
                    </form>
                    { console.log( this.state ) }
                    
                </div>
                
            </div>
                
        );
    }
    
}
export default ResponderOrcamento;
