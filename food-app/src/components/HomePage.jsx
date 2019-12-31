import React from 'react';
import {Link} from 'react-router-dom';
import repasEquilibre from '../images/image-programme.png'
import livreProgramme from '../images/image-livre-programme-aside.png'
import assietteProgramme from '../images/image-assiette-programme-aside.png'
import progressionProgramme from '../images/image-progression-programme-aside.png'


import './HomePage.css'

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
            <div className="all-container-recipes-accueil">
                <div className="container-recipes-accueil">
                    <div className="container-title-recipes-accueil">
                       <h1 class="titre-recipes-accueil">Trouvez une recette...</h1> 
                    </div>
                    <div className="all-container-recipes-elements-accueil">
                        {recipes.map((recipe,index) =>(

                            index > 1 && index < 5 &&
                            <div key={index} className="recipe-element-accueil">
                                <Link className="link-recipe-element-accueil" to={{
                                    pathname: `recipe/${recipe.recipe.label}`,
                                    state: { recipe: recipe.recipe.label}
                                }}>
                                    <img className="image-recipe-element-accueil" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                                    <h2 className="titre-recipe-element-accueil">{recipe.recipe.label}</h2> 
                                </Link>  
                            </div>

                        ))}
                    </div>
                    
                </div>

                <div className="programme-container-accueil">
                    <div className="container-title-programme-accueil">
                       <h2>Besoin d'aide pour manger équilibré mais en gardant le côté gourmand ?</h2> 
                    </div>
                    <div className="all-container-items-programme">
                        <div className="aside-programme-visuel">
                            <div className="programme-indication-item">
                                <img className="image-programme" src={livreProgramme} alt=""/>
                                <p className="test">Des centaines de recettes gourmandes et rapides à préparer</p>
                                <span className="indicateur-plus-programme">+</span>
                            </div>
                            <div className="programme-indication-item">
                                <img className="image-programme" src={assietteProgramme} alt=""/>
                                <p>Des menus à planifier pour toute la semaine</p>
                                <span className="indicateur-plus-programme">+</span>
                            </div>
                            <div className="programme-indication-item">
                                <img className="image-programme" src={progressionProgramme} alt=""/>
                                <p>S'adapte à vos préférences et vos contraintes</p>
                            </div>
                        </div>
                        <div className="programme-visuel">
                            <div className="container-programme-image">
                                <img className="programme-image" src={repasEquilibre} alt="Repas équilibré, salade de légumes, carottes, comcombres, 
                                chou-fleur et tomates"/>
                            </div>
                            <div className="container-programme-bouton">
                                <button className="programme-bouton">Je programme ma semaine</button>
                            </div>
                        </div>
                    </div>
                </div>           

            </div>
         );
    }
}
 
export default HomePage;