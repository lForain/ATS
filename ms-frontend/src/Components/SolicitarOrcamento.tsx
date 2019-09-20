import React from 'react'; 
// import Cabecalho from './Cabecalho';
import 'materialize-css/dist/js/materialize';
import 'materialize-css/dist/css/materialize.min.css';
// import { throwStatement } from '@babel/types';


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
                <div className="col offset-s1"> <h2> Orçamento: </h2> </div>
                <div className="row">
 
                    <form className="col s12">
                        
                        {/* Form: Select-Options Não está exibindo... */}
                        <div className="row">
                            <div className="input-field col s10 offset-s2">
                                <label htmlFor="tattooArtists"> Escolha uma opção abaixo:
                                <select>
                                    <option value="1"> Não tenho Preferencia de Tatuador</option>
                                    <option value="2"> Tatuador 1 </option>
                                    <option value="3"> Tatuador 2 </option>
                                    <option value="4"> Tatuador 3 </option>
                                </select>
                                </label>
                                    
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
