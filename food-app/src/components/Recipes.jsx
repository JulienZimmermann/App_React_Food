import React from 'react';
import {Link} from 'react-router-dom';

const Recipes= ({recipes}) => {
    return ( 
        <div className="recipes_container">
            {recipes.map((recipe,index)=>(
                <div key={index} className="recipe_element">
                    <div className="image_recipes">
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    </div>
                    <div className="title_recipes">
                        <h1>{recipe.recipe.label}</h1>
                    </div>
                    <div className="recipes_button">
                        <button className="button_recipe">
                            <Link to={{
                                pathname: `/recipe/${index}`,
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