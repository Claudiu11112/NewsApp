import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="">
      <input
        className="scl hover-bg-white-80"
        type="search"
        placeholder="Search"
        onChange={searchChange}
        style={{ width: 160 }}
      />
    </div>
  );
};

export default SearchBox;
