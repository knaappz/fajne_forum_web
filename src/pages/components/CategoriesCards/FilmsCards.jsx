import React from "react";

const FilmsList = [
  {
    imageUrl: "https://www.emp-shop.pl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwecdb9636/images/3/1/8/0/318007.jpg?sfrm=png",
    description: "Widowiskowa opowieść o fascynującym życiu i niesamowitych przygodach wojowniczych ludów Północy, którzy siali postrach w średniowiecznej Europie. Serial przedstawia historię kontynentu z perspektywy tych walecznych najeźdźców i odkrywców.",
  },
  {
    imageUrl: "https://cdns-images.dzcdn.net/images/cover/f66232a2a5c42da86c3fcbbf303099b7/264x264.jpg",
    description: "Shrek jest brzydkim, zielonym ogrem, mieszkającym samotnie gdzieś na baśniowym bagnie. Pewnego dnia na jego terytorium przybywają postacie z rozmaitych bajek i zakłócają jego spokój. Aby uwolnić się od nieproszonych gości Shrek wyrusza na spotkanie ze sprawcą całego zamieszania - złym lordem Farquaadem.",
  },
  {
    imageUrl: "https://i1.sndcdn.com/artworks-IkhgMZiLJDcYI9CW-bocTZQ-t500x500.jpg",
    description: "Porywająca historia fizyka J. Roberta Oppenheimera, któremu przypisuje się miano „ojca bomby atomowej” ze względu na jego rolę w Projekcie Manhattan podczas II wojny światowej. To opowieść o najbardziej niszczycielskim dziele ludzkości i jedno z największych kinowych wydarzeń tego roku.",
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXLOVIfeCoBZWnvIbfj_0My5QYihMGh3vgQ&usqp=CAU",
    description: "Świat Barbie to idealne miejsce, pełne idealnych mieszkańców. No, chyba że ktoś przeżywa akurat kryzys egzystencjalny w całej pełni. Albo jest Kenem.",
  },
];

function ImageList() {
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

