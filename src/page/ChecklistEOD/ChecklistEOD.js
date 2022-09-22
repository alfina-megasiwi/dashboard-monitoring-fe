import React from "react";
import "./ChecklistEOD.css";
import image from "./under-construction.svg";

const Header = () => {
  return (
    <div>
      <br></br>
      <div className="container-eod">
        <h1>CHECKLIST EOD</h1>
        <div className="under-construction">
          <img src={image} alt="under-construction"></img>
        </div>
        <div className="text-image">
          <h2>Page Under Construction</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
