import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ ingredients }) {
  return (
    <ul className="recipe__list">
      {ingredients.map((val, i) => (<li key={i} className="recipe__ingredient">{val}</li>))}
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
