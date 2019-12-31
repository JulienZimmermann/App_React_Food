import React from 'react';
import {Link} from 'react-router-dom';
import './Recipes.css';

const Recipes= ({recipes}) => {
    return ( 
        <div className="recipes_container">
            {recipes.map((recipe,index)=>(
                <div key={index} className="recipe_element">
                    <div className="container_image_recipes">
                        <img className="image_recipes" src={recipe.recipe.image} alt={recipe.recipe.label} />
                    </div>
                    <div className="title_recipes">
                        <h1 className="big_title_recipes_elements">{recipe.recipe.label}</h1>
                    </div>
                    <div className="container-recipes_button">
                        <button className="button_recipes">
                            <Link  className="link-recipes" to={{
                                pathname: `/recipe/${recipe.recipe.label}`,
                                state: { recipe: recipe.recipe.label}
                            }}>Voir plus</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Recipes;