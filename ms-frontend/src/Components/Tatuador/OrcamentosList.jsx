import React from 'react';
import { Link } from 'react-router-dom';


export default props => (
    <ul className="collection with-header">

        {/* Orcamento 1 */}
        <li className="collection-item">
            <Link to="/responder-orcamento/">
                <div> 
                    <span>Eu gostaria de fazer um dragão nas costas, com tamanho de aproximadamente 50 cm</span> 
                </div> 
            </Link>
        </li>
    </ul>
) 