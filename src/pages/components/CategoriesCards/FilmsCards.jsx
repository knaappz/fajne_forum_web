import React from "react";

const FilmsList = [
  {
    imageUrl: "https://www.emp-shop.pl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwecdb9636/images/3/1/8/0/318007.jpg?sfrm=png",
    description: "Opis filmu 1",
  },
  {
    imageUrl: "https://cdns-images.dzcdn.net/images/cover/f66232a2a5c42da86c3fcbbf303099b7/264x264.jpg",
    description: "Opis filmu 2",
  },
  {
    imageUrl: "https://i1.sndcdn.com/artworks-IkhgMZiLJDcYI9CW-bocTZQ-t500x500.jpg",
    description: "Opis filmu 3",
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXLOVIfeCoBZWnvIbfj_0My5QYihMGh3vgQ&usqp=CAU",
    description: "Opis filmu 4",
  },
];

const ImageList = () => {
  return (
    <>
      {FilmsList.map((film, index) => (
        <div key={`film-${index}`} className="rowCards">
          <div className="imgCard">
            <img src={film.imageUrl} alt={`Zdjęcie ${index + 1}`} />
          </div>
          <div className="descDiv">
            <p>{film.description}</p>
            <button className="ocen">Oceń</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageList;

