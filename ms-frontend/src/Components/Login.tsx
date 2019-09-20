import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import ';'

class Login extends React.Component{

    constructor( props: any ){
        super( props );
    }

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

        return(
            <div className="row">
                <form className="col s12">
                <div className="col offset-s2">
                    <h2> Login: </h2>
                </div>

                <div className="row">

                    <div className="input-field col s6 offset-s3">
                    <input name="email" id="email" type="email" className="validate" onChange={ this.inputListener } />
                    <label htmlFor="email">Email</label>
                    </div>
                </div>

                <div className="row">

                    <div className="input-field col s6 offset-s3">
                    <input name="password" id="password" type="password" className="validate" onChange={ this.inputListener } />
                    <label htmlFor="password"> Senha </label>
                    </div>
                    
                </div> 

                <div className="row">
                    <div className="col offset-s3">
                        <button onClick={ this.submitForm } className="waves-effect waves-light btn black">Logar</button>
                    </div>
                </div>
                
                </form>
            </div>
        )

    }
}

export default Login;