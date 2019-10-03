import React from 'react'; 
import 'materialize-css/dist/js/materialize';
import 'materialize-css/dist/css/materialize.min.css';
// import { throwStatement } from '@babel/types';
import $ from 'jquery';


class SolicitarOrcamento extends React.Component {
    constructor( props: number ){
        super(props);
        this.state = { value: "1" };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handleChange( event: any ) {
    //     this.setState( { value: this.value } );
    // }
    
    // handleSubmit( event: any ) {
    //     alert( "Voce escolheu " + this.state.value );
    //     event.preventDefault();
    // }
    
    submitForm = () => {
        console.log( this.state );
    }

    inputListener = ( event: any ) => {
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
                
                <div className="col offset-s1"> <h2> Orçamento: </h2> </div>
                <div className="row">  

                    <div className="col s12 offset-s2">
                        <h5> Escolha para quem deseja solicitar orçamento: </h5>
                    </div>

                    <form className="col s12">
                        {/* Form: Checkbox ... */}
                        <div className="row">
                        
                            <div className="col offset-s2">
                                
                                <p> 
                                    <label>
                                        <input type="checkbox" className="filled-in"></input>
                                        <span> Tatuador1 </span>
                                    </label>
                                </p>
                            </div>

                            <div className="col">
                                <p>
                                    <label>
                                        <input type="checkbox" className="filled-in"></input>
                                        <span> Tatuador2 </span>
                                    </label>
                                </p>
                            </div>

                            <div className="col">
                                <p>
                                    <label>
                                        <input type="checkbox" className="filled-in"></input>
                                        <span> Tatuador3 </span>
                                    </label>
                                </p>
                            </div>

                            <div className="col">
                                <p>
                                    <label>
                                        <input type="checkbox" className="filled-in"></input>
                                        <span> Todos </span>
                                    </label>
                                </p>
                            </div>
                            

                        </div>
                    
                        {/* Form: File Input */}
                        <div className="row">
                            <div className="col offset-s2">
                                <div className="file-field input-field ">
                                
                                    <div className="btn">
                                        <span> Foto Desenho </span>
                                        <input type="file" ></input>
                                    </div>

                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"></input>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Texto para descrição da imagem contendo informações adicionais sobre a tatuagem: tamanho, localização, etc. */}
                        <div className="row">
                            <div className="col s4 offset-s2">
                                <div className="input-field">                         

                                    <i className="material-icons prefix"> create </i>
                                    <textarea id="icon_prefix2" className="materialize-textarea"  placeholder="tamanho em cm, localização"></textarea>
                                    <label htmlFor="icon_prefix2">Descrição da Tatuagem</label>
                                </div>
                            </div>
                        </div>

                        
                        {/* Botão de solicitar Orçamento */}
                        <div className="row">
                            <div className="col offset-s2">
                                <button onClick={ this.submitForm } className="waves-effect waves-light btn black">Solicitar Orçamento</button>
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


export default SolicitarOrcamento;
