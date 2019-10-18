import React from "react";
import "material-design-icons";
import { Link } from "react-router-dom";
import Categories from "../Categories/CateList";


class MyCategories extends React.Component{

    constructor( props ){
        super( props );
    }


    render(){

        return(
            <div className="row"> 
                {/* Adicionando link dos icones: */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

                <div className="col offset-s1"> 
                    <h2> Minhas Categorias </h2>
                </div>

                <div className="row">
                    <div className="col offset-s2 s8">

                        {/* Lista de Categorias*/}
                        <Categories liName="Lista de Categorias" />

                    </div>
                </div>
            </div>

        )
    
    }

}

export default MyCategories;