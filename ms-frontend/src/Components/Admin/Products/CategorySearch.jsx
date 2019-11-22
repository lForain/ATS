import * as React from 'react';
import Category from './Category.jsx';

class CategorySearch extends React.Component {
  constructor() {
      super();
      this.state = {
          categories: [],
      };
  }

  componentDidMount() {
    let initialCategories = [];
    fetch('https://localhost:5001/category')
        .then(response => {
            return response.json();
        }).then(data => {
        initialCategories = data.results.map((categories) => {
            return categories;
        });
        console.log(initialCategories);
        this.setState({
            categories: initialCategories,
        });
    });
  }

  render() {
      return (
                  <Category state={this.state}/>
      );
  }
  

}

export default CategorySearch;
