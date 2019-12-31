import React from 'react';
import IconSaerch from '../images/icone-recherche.png';
import './Form.css';

const Form = ({getRequest}) => {
    return ( 
        <div className="container-form">
          <form className="search-form" onSubmit={getRequest}>
            <span className="label-search">
              <label className="label-search-bar"for="search-bar">Je cherche</label>
              <img className="icone-recherche-version-mobile"src={IconSaerch} alt="icone recherche"/>
            </span>
            <input className="search-bar" id="search-bar" type="text" name="recipeName" placeholder="une recette, un ingrédient, de l'aide..."/>
            <input className="search-button" type="submit" value="Envoyer" />
          </form>
        </div>
     );
}

export default Form;
 