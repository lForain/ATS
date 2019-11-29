import React from "react";
import "material-design-icons";
import Orcamentos from "./OrcamentosList";


class MeusOrcamentos extends React.Component{

    constructor( props ){
        super( props );
    }


    render(){

        return(
            <div className="row"> 
                {/* Adicionando link dos icones: */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

                <div className="col offset-s1"> 
                    <h2> Meus pedidos de Orçamento </h2>
                </div>

                <div className="row">
                    <div className="col offset-s2 s8">

                        {/* Lista de Categorias*/}
                        <Orcamentos liName="Lista de Orcamentos" />

                    </div>
                </div>
            </div>

        )
    
    }

}

export default MyCategories;