import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios';
// import querystring from 'querystring';

axios.defaults.baseURL = 'http://localhost:5001';

class Contato extends Component {

    inputListener = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        try {
            axios.post(axios.defaults.baseURL).then(resp => console.log(`Response: ${JSON.stringify(resp)}`))
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="row">
              <div className="col offset-s1"> <h2> Contato </h2> </div>
                
              <div className="row"> 
                <div className="col offset-s3 col s6">
                  <p className="flow-text">Olá, aqui no estúdio do Seu Armando prezamos pela sua satisfação.
                    Por isso estamos sempre ansiosos para receber seu feedback ou responder qualquer dúvida que você possa ter.
                    Portanto sinta-se a vontade a nos contatar por qualquer um dos métodos abaixo:</p>
                </div>
              </div>

              <div className="row">
                <div className="col offset-s1">
                  <h5>Endereço:</h5>
                  <p>Rua Exemplo, número 0</p>
                </div>
                  
                <div className="col offset-s1">
                  <h5>Instagram:</h5>
                  <p>instagram.com/estudioSeuArmando</p>
                </div>
                 
                <div className="col offset-s1">
                  <h5>Whatsapp:</h5>
                  <p>(21) 99999-9999</p>
                </div>

                <div className="col offset-s1">
                  <h5>Email:</h5>
                  <p>estudioseuarmando@gmail.com</p>
                </div>

              </div>

              <div className="row">
                <form className="col s8 offset-s2">
                  <p className="flow-text"> Ou entre em contato conosco por email mandando a mensagem abaixo: </p>
                  
                  {/* Campo do corpo do Email */}
                  <div className="input-field">
                    <textarea id="textarea1" name="corpoEmail" className="materialize-textarea" onChange={ this.inputListener }/>
                    <label htmlFor="textarea1"> Texto do E-mail: </label>
                  </div>

                  {/* Botão de Enviar */}
                  <div className="row">
                    <div className="col offset-s1">
                      <button type="submit" value="submit form" className="waves-effect waves-light btn black"> Enviar </button>

                    </div>
                  </div>

                </form>

              </div>

            </div>
        )
    }
}

export default Contato;
