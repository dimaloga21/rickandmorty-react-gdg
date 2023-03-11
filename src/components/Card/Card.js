import * as React from 'react';
import 'Card.style.css';

const Card = ({ character }) => {
  return (
    <div>
      <picture>
        <img src={character.image} />
        <h3>{character.name}</h3>
        <p>
          species: <span>{character.species}</span>
        </p>
      </picture>
    </div>
  );
};

export default Card;
