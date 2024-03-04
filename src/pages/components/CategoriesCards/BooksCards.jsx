import React from "react";

const BooksList = [
  {
    imageUrl: "https://ostatniatawerna.pl/wp-content/cache/thumb/4f/366265b449ac54f_730x452.jpg",
    description: "Opis książki 1",
  },
  {
    imageUrl: "https://assets1.ignimgs.com/2018/12/14/metro-exodus---button-1544750418985.jpg",
    description: "Opis książki 2",
  },
  {
    imageUrl: "https://upolujebooka.pl/_data/offer/019/189720-extinguish_the_heat_runda_finalowa_-_audiobook.jpg",
    description: "Opis książki 3",
  },
  {
    imageUrl: "https://liczilex.pl/wp-content/uploads/2017/09/it-1.jpg",
    description: "Opis książki 4",
  },
];

const ImageList = () => {
  return (
    <>
      {BooksList.map((book, index) => (
        <div key={`book-${index}`} className="rowCards">
          <div className="imgCard">
            <img src={book.imageUrl} alt={`Zdjęcie ${index + 1}`} />
          </div>
          
          <div className="descDiv">
            <p>{book.description}</p>
            <button className="ocen">Oceń</button>
          </div>

        </div>
      ))}
    </>
  );
};



export default ImageList;
