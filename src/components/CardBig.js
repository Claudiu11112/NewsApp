import React from "react";

const CardBig = ({ title, body, id }) => {
  return (
    <div className="">
      {/* <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> */}
      <img
        className="br3"
        alt="news"
        src={`https://source.unsplash.com/collection/${id}/1000x700`}
      />
      <div>
        <h2 className="f4 tj pa3 ma0">{title}</h2>
        <p className="f5 tj pa3 ma0">{body + " " + id}</p>
      </div>
    </div>
  );
};

export default CardBig;
