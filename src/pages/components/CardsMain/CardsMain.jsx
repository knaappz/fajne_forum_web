import React, { useState } from 'react';
import CardImages from './CardImages.json';
import Games from '../Categories/Games';
import Films from '../Categories/Films';
import Books from '../Categories/Books';
import '../Categories/categories.css';

const Card = ({ name, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="div-overflow" onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
};

const CardsMain = () => {
  const [clickedCategory, setClickedCategory] = useState('gry'); // Domyślnie wyświetlamy komponent gier

  const handleCardClick = (category) => {
    setClickedCategory(category);
  };

  const cards = CardImages.map(({ name }, index) => (
    <Card 
      key={index} 
      name={name} 
      onClick={handleCardClick} 
    />
  ));

  let displayedComponent;
  switch (clickedCategory) {
    case 'gry':
      displayedComponent = <Games />;
      break;
    case 'ksiazki':
      displayedComponent = <Books/>;
      break;
    case 'filmy':
      displayedComponent = <Films />;
      break;
    default:
      displayedComponent = null;
  }

  return (
    <>
      <div className="welcome">
        <h1>Wybierz kategorie:</h1>
        <div className='img-container'>
          {cards}
        </div>
      </div>

      {clickedCategory && 
      <div id='descMain'>
        {CardImages.find(card => card.name === clickedCategory)?.desc}
        {displayedComponent}
      </div>}
    </>
  );
};

export default CardsMain;
