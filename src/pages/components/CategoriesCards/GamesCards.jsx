import React from "react";

const GamesList = [
  {
    imageUrl: "https://image.ceneostatic.pl/data/article_picture/f2/0a/d5aa-b9b4-4e77-ab11-cdad8e0662ce_large.jpg",
    description: "Przygodowa gra akcji przedstawiona z perspektywy trzeciej osoby, w której gracz wciela się w postać podróżnika Nathana Drake'a. Nathan walczy za pomocą broni palnej, granatów bądź gołych pięści.",
  },
  {
    imageUrl: "https://image.api.playstation.com/vulcan/img/cfn/1130791_COqLRw6IGlDVHxyV8aqC9_YaF0sCN8IbOlVhzJ6sWm5tlpKTjN8npK2vA_mUJUdyQjP4-U4rEnk7cScmlvoLzXi7.png",
    description: "Niezwykle realistyczna gra typu FPS, wprowadzającą niezrównaną atmosferę i rzucającą nowe światło na to, jak zmienia się współczesna wojna.",
  },
  {
    imageUrl: "https://www.telepolis.pl/images/2023/08/baldurs-gate-3-pc-patch-2.jpg",
    description: "Gra fabularna z rozgrywką dla jednego gracza i trybem kooperacyjnym dla wielu graczy. Mechanika rozgrywki opiera się na zasadach piątej edycji Dungeons & Dragons. ",
  },
  {
    imageUrl: "https://cdn.mobygames.com/covers/11037272-overwatch-2-playstation-4-front-cover.jpg",
    description: "Overwatch: Organizacja strzegąca ładu i pokoju w futurystycznym świecie. Rzeczywistość w grze nękana jest jednak rozmaitymi konfliktami i pogrąża się w chaosie. Członkowie overwatch są kompletnie podzieleni i niezdolni do współpracy, a ludzkość potrzebuje przecież bohaterów.",
  },
];

function ImageList() {
  return (
    <>
      {GamesList.map((game, index) => (
        <div key={`game-${index}`} className="rowCards">
          <div className="imgCard">
            <img src={game.imageUrl} alt={`Zdjęcie ${index + 1}`} />
          </div>

          <div className="descDiv">
            <p>{game.description}</p>
            <button className="ocen">Oceń</button>
          </div>
          
        </div>
      ))}
    </>
  );
};


export default ImageList;
