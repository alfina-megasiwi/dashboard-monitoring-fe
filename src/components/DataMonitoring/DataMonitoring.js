import React from "react";
import Chart from "../../components/Chart/Chart";
import "../ErrorTable/ErrorTable.css"

const DataMonitoring = () => {
  return (
    <div>
      <div className="error-card">
        <div className="error-card-title">Data Monitoring</div>
        <div className="error-card-body">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DataMonitoring;
