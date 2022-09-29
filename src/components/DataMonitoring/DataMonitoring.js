import React from "react";
import Chart from "../../components/Chart/Chart";
import "../ErrorTable/ErrorTable.css"
import "./DataMonitoring.css";

const DataMonitoring = () => {
  return (
    <div>
      <div className="data-montoring-card">
        <div className="data-montoring-card-title">Data Monitoring</div>
        <div className="data-montoring-card-body">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DataMonitoring;
