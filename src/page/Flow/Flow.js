import React from "react";
import "../ChecklistEOD/ChecklistEOD.css";
import image from "../ChecklistEOD/under-construction.svg";

const Header = () => {
  return (
    <div>
      <br></br>
      <div className="container-eod">
        <div className="title-under-construction">FLOW</div>
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
