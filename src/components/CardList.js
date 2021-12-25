import React from "react";
import Card from "../components/Card";

const CardList = ({ cards, showNews }) => {
  // const showNews = () => {
  //   alert("I'm an alert  " );
  // };
  return (
    <div onClick={showNews}>
      {/* onClick={showNews} */}
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            id={cards[i].id}
            title={cards[i].title}
            body={cards[i].body}
          />
        );
      })}
    </div>
  );
};

export default CardList;
