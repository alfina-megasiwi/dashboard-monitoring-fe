import React from "react";
import "./Flow.css";
import image from "./card.svg";

const Flow = () => {
  return (
    <div><br></br>
        <div className="text">
            <h1>CHECKLIST EOD</h1>
        </div>
        <div className="card">
            <img src={image} alt="card"></img>
        </div>
    </div>
  );
};

export default Flow;
