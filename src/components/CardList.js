import React from "react";
import Card from "../components/Card";
import Footer1 from "../components/Footer1";

const CardList = ({ cards }) => {
  return (
    <div>
      {""}
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
      <div className="">
        <Footer1 />
      </div>
    </div>
  );
};

export default CardList;
