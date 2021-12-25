import React from "react";
import CardBig from "./CardBig";
import Card from "./Card";

const CardListBig = ({ cards, showNew, id }) => {
  // let id = this.state.id;
   alert("I'm an alert  " + cards[9].id);
  return (
    <div onClick={showNew}>
      <CardBig
        key={3}
        id={cards[0].id}
        title={cards[3].title}
        body={cards[3].body}  
      />
    </div>
  );
};

export default CardListBig;
