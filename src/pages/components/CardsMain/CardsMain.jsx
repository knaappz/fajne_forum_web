import React from 'react';
import CardImages from './CardImages.json';

const Card = ({ image }) => {
  return (
    
      <img src={image} alt="zdjęcie" />
    
  );
};

class CardsMain extends React.Component {
  render() {
    if (!CardImages || CardImages.length === 0) {
      return <div>Nie znaleziono zdjęć.</div>;
    }

    const cards = CardImages.map((zdjecie, index) => (
      <Card key={index} image={zdjecie} />
    ));

    return <div className="img-container">{cards}</div>;
  }
}

export default CardsMain;
