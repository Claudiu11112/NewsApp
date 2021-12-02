import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="scl hover-bg-white-70"
      type="search"
      placeholder="Search"
      onChange={searchChange}
      style={{ width: 160 }}
    />
  );
};

export default SearchBox;
