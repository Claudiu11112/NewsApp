import React from "react";
import CardBig from "./CardBig";
// import Card from "./Card";

const CardListBig = ({ card, showNew, showId }) => {
  // let id = this.state.id;
  // alert("I'm an alert  " + showId);
  let r = Math.floor(Math.random() * 100);

  return (
    <div onClick={showNew}>
      <CardBig
        // showId={this.showId}
        key={r}
        id={card[r].id}
        title={card[r].title}
        body={card[r].body}
      />
    </div>
  );
};

export default CardListBig;
