import React from 'react';

const Form = ({getRequest}) => {
    return ( 

        <form className="search-form" onSubmit={getRequest}>
          <label>
            Nom:
            <input className="search-bar" type="text" name="recipeName" />
          </label>
          <input className="search-button" type="submit" value="Envoyer" />
        </form>
     );
}

export default Form;
 