import React from 'react'; 
// import Cabecalho from './Cabecalho';
import 'materialize-css/dist/css/materialize.min.css';


class SolicitarOrcamento extends React.Component{
    constructor( props: number ){
        super(props);
        this.state = { selectedValue: "2" };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handleChange( event: React.FormEvent<HTMLSelectElement ) {
    //     this.setState( { value: this.value } );
    // }
    
    // handleSubmit( event: Event ) {
    //     alert( "Voce escolheu " + this.state.value );
    //     event.preventDefault();
    // }

    render(){
        return (
            <div>
                <h1> Orçamento </h1>
                <form>
                    <div className="input-field col s12">
                        <select value={2} >
                            <option value = "1"> Não tenho preferencia de tatuador </option>
                            <option value = "2">Tatuador 1</option>
                            <option value = "3">Tatuador 2</option>
                            <option value = "4">Tatuador 3</option>
                        </select>
                        <label>ATS Select</label>
                    </div>
                </form>
                { console.log( this.state ) }
            </div>
                
        );
    }
    
}

export default SolicitarOrcamento;