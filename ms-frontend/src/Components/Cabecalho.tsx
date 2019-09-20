import React from 'react';
import logo from '../logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import '../Assets/css/App.css';

export default function Cabecalho (){
    return (
        <nav>
            <div className="nav-wrapper black">
                <img src={logo} className="left logo-container" alt="logo" />
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">Minhas Tatuagens</a></li>
                    <li><a href="collapsible.html">Tattoos</a></li>
                    <li><a href="collapsible.html">Contato</a></li>
                    <li><a href="collapsible.html">Loja</a></li>
                </ul>
                <div className="right row">
                    <div className="col s18" >
                        <div className="row" id="topbarsearch">
                            <div className="input-field col s12 s12 white-text">
                                <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete white-text"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right row">
                    <div className="col s12" >
                        <a href="login.html">Login</a>
                    </div>
                </div>          
            </div>
        </nav>
  );
}
