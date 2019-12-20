import React from 'react';
import {Link} from 'react-router-dom';


class Recipe extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state={
            API_ID: "127f933a",
            API_KEY:  "18f4a89e533eb1bbde74e798eab9525e",
            activeRecipe: [],
        }
    }

    async componentDidMount(){
        const title = this.props.location.state.recipe
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${this.state.API_ID}&app_key=${this.state.API_KEY}`);
        const data =  await req.json();
        this.setState({activeRecipe: data.hits[0]}); 
        console.log(this.state.activeRecipe)
    }

    render() { 
        const {recipe} = this.state.activeRecipe;
        const testActiveRecipe = this.state.activeRecipe.recipe;
        return ( 
            <div className="recipe_container">
                {this.state.activeRecipe.length !== 0 &&
                   <React.Fragment>
                        <div className="title_recipe_element">
                            <h1>{testActiveRecipe && recipe.label}</h1> 
                        </div>
                        <div className="image_recipe_element">
                            <img src={testActiveRecipe && recipe.image} alt={testActiveRecipe && recipe.label}/>
                        </div>
                        <div className="informations_recipe_element">
                            <div className=" informations_recipe_container time">
                                <span className="time_recipe_element">Temps:</span>
                                <span className="time_number">{testActiveRecipe && recipe.totalTime} minutes</span>
                            </div>
                            <div className=" informations_recipe_container yield">
                                <span className="yield_recipe_element">Personnes:</span>
                                <span className="yield_number">{testActiveRecipe && recipe.yield}</span>
                            </div>
                            <div className=" informations_recipe_container source">
                                <span className="source_recipe_element">Source:</span>
                                <span className="website_source">
                                    <a className="link-recipe" href={testActiveRecipe && recipe.url}>{testActiveRecipe && recipe.source}</a>
                                </span>
                            </div>
                        </div>
                        <div className="list_ingredients_recipe_element">
                            <div className="title_ingredient_recipe">
                                <h2>Ingrédients</h2>
                            </div>
                            <div className="list_ingredients_recipe">
                                <ul>
                                    {testActiveRecipe && recipe.ingredients.map((ingredient,index)=>(
                                        <li key={index}>{ingredient.text}</li>
                                    ))}
                                </ul>
                                <span>
                                    <button className="button_recipe">
                                    <a className="link-recipe" href={testActiveRecipe && recipe.url}>Préparation</a>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="return_home_container">
                            <button className="button_recipe return_home_button">
                                <Link to="/">Accueil</Link>
                            </button>
                        </div> 
                    </React.Fragment>
                 }
            </div>
         );
    }
}
 
export default Recipe;
 