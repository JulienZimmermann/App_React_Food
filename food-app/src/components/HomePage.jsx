import React from 'react';
import {Link} from 'react-router-dom';
import image from '../images/programme-repas-equilibre.jpg'

class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            API_ID: "127f933a",
            API_KEY:  "18f4a89e533eb1bbde74e798eab9525e",
            recipes: [],
        };
    }

    async componentDidMount(){
        const response = await fetch(`https://api.edamam.com/search?q=christmas&app_id=${this.state.API_ID}&app_key=${this.state.API_KEY}`);
        const data = await response.json();
        console.log(data.hits)
        this.setState({recipes : data.hits})
    }

    render() {

        const{recipes} = this.state;
        
        return ( 
            <React.Fragment>
                <div className="container-recipes-accueil">
                    <h1 class="titre-recipes-accueil">Découvrez les nouvelles recettes de Noël</h1>
                    {recipes.map((recipe,index) =>(

                        index > 1 && index < 5 &&
                        <div key={index} className="recipe-element-accueil">
                            <Link to={{
                                pathname: `recipe/${index}`,
                                state: { recipe: recipe.recipe.label}
                            }}>
                                <img className="image-recipe-element-accueil" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                                <h2 className="titre-recipe-element-accueil">{recipe.recipe.label}</h2> 
                            </Link>
                            
                        </div>

                    ))}
                </div>

                <div className="programme-container-accueil">
                    <h2>Besoin d'aide pour manger équilibré mais en gardant le côté gourmand ?</h2>
                    <div className="programme-visuel">
                        <div className="container-programme-image">
                            <img className="programme-image" src={image} alt="Repas équilibré, salade de légumes, carottes, comcombres, 
                             chou-fleur et tomates"/>
                        </div>
                        <div className="container-programme-bouton">
                            <button className="programme-bouton">Je programme ma semaine</button>
                        </div>
                    </div>
                </div>           

            </React.Fragment>
            

         );
    }
}
 
export default HomePage;