import React from "react";
import "./Header.css";
import SearchBox from "../components/SearchBox";
import Contact from "../components/Contact";
import NewsApp from "../components/NewsApp";

const Header = (props) => {
  return (
    <div className="header pa2 tl">
      <NewsApp />
      <div>
        <Contact />
        <SearchBox searchChange={props.onSearchChange} />
      </div>
    </div>
  );
};

export default Header;
