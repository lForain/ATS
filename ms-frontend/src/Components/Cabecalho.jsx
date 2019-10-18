import React from 'react';
import logo from '../logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import '../Assets/css/App.css';
import { Link } from 'react-router-dom';

export default function Cabecalho (){
    return (
        <nav>
            <div className="nav-wrapper black">
                <img src={logo} className="left logo-container" alt="logo" />
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to="/"><span>Home</span></Link></li>
                    <li><Link to="/orcamento"><span>Minhas Tatuagens</span></Link></li>
                    <li><Link to="/tattoos"><span>Tattoos</span></Link></li>
                    <li><Link to="/"><span>Contato</span></Link></li>
                    <li><Link to="/"><span>Loja</span></Link></li>
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
                        <Link to="/login"><span>Login</span></Link>
                    </div>
                </div>          
            </div>
        </nav>
  );
}
