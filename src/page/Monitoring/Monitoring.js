import React from "react";
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
        <h1>MONITORING</h1>
        <h3>Today (H-1)</h3>
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
        <ErrorTable />
      </div>
    </div>
  );
};

export default Monitoring;
