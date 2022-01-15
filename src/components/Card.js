import React from "react";

const Card = ({ title, body, id, }) => {
  const showId = () => {
    let cc = id;
    // alert("I'm an alert  " + cc);
    return cc;
  };
  
  // const [id] = useState({id:id});
  return (
    <div className="tc bg-white dib br3 pa0 ma2 grow shadow-5 measure-narrow">
      {/* <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> */}
      <img
        onClick={showId}
        className="br3 br--top"
        alt="news"
        src={`https://source.unsplash.com/collection/${id}/600x500`}
      />
      <div>
        <h2 className="f4 tj pa3 ma0">{title}</h2>
        <p className="f5 tj pa3 ma0">{body + "  " + id}</p>
      </div>
    </div>
  );
};

export default Card;
