import React from 'react';


class SearchInput extends React.Component{
    constructor ( props ){
      super( props );

      this.state = {
        value: ""
      };

    }

    submitForm = () => {
      console.log( this.state );
      
    }

    inputListener = ( event ) => {
      const { name, value } = event.target;
      this.setState({
          [ name ]: value
      })
    }

    render(){
      
      return(
        <div className="row" >
          <form>
            <div className="input-field col s6 offset-s2">
              <input name="search" id="search-product" type="text" className="validate" placeholder="Busque aqui o seu produto..." onChange = { this.inputListener }/> 
              <button onClick={ this.submitForm } className="waves-effect waves-light btn black">Buscar</button>
            </div>
          </form>

        </div>
      )

    }
}
export default SearchInput; 
