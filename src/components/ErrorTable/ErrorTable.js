import React, { useState, useEffect } from "react";
import "./ErrorTable.css";

import Chart from "../../components/Chart/Chart";

const ErrorTable = () => {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-card-title">Error Records</div>
        <div className="error-card-body">
          <Chart />
        </div>
      </div>
      <div className="error-card">
        <div className="error-card-title">Error Records</div>
        <div className="error-card-body"></div>
      </div>
    </div>
  );
};

export default ErrorTable;
