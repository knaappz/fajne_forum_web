import React, { useState } from 'react';
import CardImages from './CardImages.json';

const Card = ({ image, name, desc, onClick }) => {
  const handleClick = () => {
    onClick(desc);
  };

  return (
    // <a href='#descMain'>
      <div className="div-overflow" onClick={handleClick}>
        <img src={image} alt="zdjęcie" />
        <p>{name}</p>
      </div>
    // </a>
  );
};

const CardsMain = () => {
  const [clickedCard, setClickedCard] = useState(CardImages[0].desc);
  const handleCardClick = (desc) => {
    setClickedCard(desc);
  };

  if (!CardImages || CardImages.length === 0) {
    return <div>Nie znaleziono zdjęć.</div>;
  }

  const cards = CardImages.map(({ image, name, desc }, index) => (
    <Card 
    key={index} 
    image={image} 
    name={name} 
    desc={desc} 
    onClick={handleCardClick} />
  ));

  return (
    <>
      <div className="welcome">
        <h1>Wybierz kategorie:</h1>
        <div className='img-container'>
          {cards}
        </div>
      </div>

      {clickedCard && <div id='descMain'>
        <p>{clickedCard}</p></div>}

    </>
  );
};

export default CardsMain;
