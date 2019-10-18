import React from 'react';
import axios from 'axios';
import querystring from 'querystring';

class UpdateCategories extends React.Component{

    constructor( props ){
        super( props );

    }

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
                <div className="col s11 offset-s1">
                    <h2> Editar Categoria </h2>
                </div>


                <div className="row">
                    
                    <form onSubmit={this.onSubmit}>
                    
                        <div className="input-field col offset-s1 s4">
                            <label htmlFor="name">Nome</label>
                            <input name="name" ref="name" type="text" className="validate"  onChange={this.inputListener}/>
                        </div>
                        
                        <div className="row">
                            <div className="col s11 offset-s1">
                                <button onClick={ this.onSubmit } type="submit" value="submit form" className="waves-effect waves-light btn black">Cadastrar Categoria</button>
                            </div>
                        </div>

                    </form>

                </div>

            </div>

        )
    }

}
export default UpdateCategories;