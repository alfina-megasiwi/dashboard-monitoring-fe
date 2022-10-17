import { React, useEffect, useState } from "react";
import "./ErrorTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnGroupingTable from "../table/ColumnGroupingTable";

const ErrorTable = ({type}) => {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-card-title">Error Records</div>
        <div className="error-card-body">
          <br/><br/>
          <ColumnGroupingTable type={type}/>
        </div>
      </div>
    </div>
  );
};

export default ErrorTable;
