import React from "react";

const BooksList = [
  {
    imageUrl: "https://ostatniatawerna.pl/wp-content/cache/thumb/4f/366265b449ac54f_730x452.jpg",
    description: "Główną bohaterką jest Bryce Quinlan, pół człowiek, pół fae. Po makabrycznym morderstwie dokonanym na jej bliskich świat dziewczyny rozpada się, a kiedy myśli, że nie może już być gorzej, los znów ją zaskakuje. Tym razem na arenę wkracza Hunt Athalar – mroczny upadły anioł na usługach Gubernatora Księżycowego Miasta.",
  },
  {
    imageUrl: "https://assets1.ignimgs.com/2018/12/14/metro-exodus---button-1544750418985.jpg",
    description: "Pełna trylogia „Metro 2033”, „Metro 2034”, „Metro 2035” Dmitrija Glukhovsky’ego wydana w edycji limitowanej z okazji premiery gry „Metro Exodus”! Poznaj kultowe powieści, które dały początek tej długo wyczekiwanej grze!",
  },
  {
    imageUrl: "https://upolujebooka.pl/_data/offer/019/189720-extinguish_the_heat_runda_finalowa_-_audiobook.jpg",
    description: "Życie nauczyło Victorię Clark, że aby przetrwać, musi przywdziewać maski i zbroić się w tarcze ochronne. Znała cierpienie, ból po stracie najbliższych, spustoszenie, jakie poczyniła choroba w jej własnej głowie. Znała apatię, chłód, nienawiść. Myślała, że równie doskonale zna swoje życie, ale los nie przygotował jej na to, że będzie się musiała od nowa uczyć człowieka, którego obraz od prawie pięciu lat miała zapisany w żyłach.",
  },
  {
    imageUrl: "https://liczilex.pl/wp-content/uploads/2017/09/it-1.jpg",
    description: "Opowiada o siedmioosobowej grupce nastolatków zamieszkałych w Derry, którzy pod koniec lat pięćdziesiątych ubiegłego wieku stoczyli niebezpieczny pojedynek z potworem żyjącym w kanałach pod miastem.",
  },
];

function ImageList() {
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
