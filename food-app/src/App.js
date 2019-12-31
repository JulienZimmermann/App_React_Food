import React from 'react';
import Recepies from './components/Recipes';
import Form from './components/Form';
import HomePage from './components/HomePage';

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state={
      API_ID: "127f933a",
      API_KEY:  "18f4a89e533eb1bbde74e798eab9525e",
      recipes: [],
      search: '',
    };

    this.getRequest = this.getRequest.bind(this);
  }


  async getRequest(e){
    e.preventDefault();
    const search = e.target.elements.recipeName.value;
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${this.state.API_ID}&app_key=${this.state.API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    this.setState({recipes: data.hits});
  }

  componentDidMount(){
    if(localStorage.length !== 0){
      const json = localStorage.getItem('recipes');
      const recipes = JSON.parse(json);
      this.setState({recipes});
    }
  }

  componentDidUpdate(){
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes)
  }

  render() { 
    return (
      <React.Fragment>
        <Form
          getRequest={this.getRequest}
          recipes={this.state.recipes}
        />
        {localStorage.length === 0 ? <HomePage /> :
        
        <Recepies 
          recipes={this.state.recipes} 
        /> }
        
        
      </React.Fragment>
     );
  }
}
 
export default App;


