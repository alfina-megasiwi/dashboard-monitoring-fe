import React from "react";
import DataMonitoring from "../../components/DataMonitoring/DataMonitoring";
import ErrorTable from "../../components/ErrorTable/ErrorTable";
import "./Monitoring.css";

const Monitoring = () => {
  const dataToday = [
    {
      name: "Data (Total Records)",
      value: 19740,
    },
    {
      name: "Time (Second)",
      value: 1530,
    },
    {
      name: "Data/Time",
      value: 12.9,
    },
    {
      name: "Error",
      value: 23,
    },
  ];
  return (
    <div>
      <br />
      <div className="main-text">
        <div className="title-monitoring">MONITORING</div>
        <div className="title-today">Today (H-1)</div>
        <div className="card-container">
          {dataToday.map((item) => (
            <div className="card-today">
              <div className="today-title">{item.name}</div>
              <div
                className="today-value"
                style={{ color: item.name === "Error" ? "red" : "white" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <DataMonitoring />
        <ErrorTable />
      </div>
    </div>
  );
};

export default Monitoring;
