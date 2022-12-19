import React from "react";
import "../ChecklistEOD/ChecklistEOD.css";
import image from "./flow.svg";
import "./Flow.css"

const Header = () => {
  return (
    <div>
      <br></br>
      <div className="container-eod">
        <div className="title-flow">FLOW</div>
        <div className="flow">
          <img src={image} alt="flow"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
