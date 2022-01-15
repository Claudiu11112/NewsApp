import React from "react";
import CardBig from "./CardBig";
// import Card from "./Card";

const CardListBig = ({ card, showNew }) => {
  let r = Math.floor(Math.random() * 100);

  return (
    <div onClick={showNew}>
      <CardBig
        key={r}
        id={card[r].id}
        title={card[r].title}
        body={card[r].body}
      />
    </div>
  );
};

export default CardListBig;
