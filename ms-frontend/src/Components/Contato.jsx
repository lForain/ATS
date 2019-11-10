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
            <div>
                <div className="row col offset-s1"> <h2> Contato </h2> </div>
                <div className="row col offset-s3 col s6">
                    <p class="flow-text">Olá, aqui no estúdio do Seu Armando prezamos pela sua satisfação.
                    Por isso estamos sempre ansiosos para receber seu feedback ou responder qualquer dúvida que você possa ter.
                    Portanto sinta-se a vontade a nos contatar por qualquer um dos métodos abaixo:</p>
                </div>
                <h5>Endereço</h5>
                <p>Rua Exemplo, número 0</p>
                <h5>Instagram</h5>
                <p>instagram.com/estudioSeuArmando</p>
                <h5>Whatsapp:</h5>
                <p>(21) 99999-9999</p>
                <h5>Email:</h5>
                <p>estudioseuarmando@gmail.com</p>

                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <p class="flow-text">Ou nos envie um email diretamente por aqui:</p>
                            <div class="input-field col s12">
                            <textarea id="textarea1" name="corpoEmail" class="materialize-textarea onChange={this.inputListener}"/>
                            <label for="textarea1">Textarea</label>
                            </div>
                        </div>
                        <div className="row col offset-s1">
                            <button type="submit" value="submit form" className="waves-effect waves-light btn black">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contato;