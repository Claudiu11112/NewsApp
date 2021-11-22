import React from "react";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <div className="card">
      <hr></hr>
      <p>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="#!"> News App.com </a>
      </p>
    </div>
  );
};

export default Footer1;
