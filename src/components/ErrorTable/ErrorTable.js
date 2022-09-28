import { React, useEffect, useState } from "react";
import "./ErrorTable.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCheck } from "react-icons/bi";
import axios from "axios";

const ErrorTable = () => {
  const [errorWeekly, setErrorWeekly] = useState([]);
  const [errorLog, setErrorLog] = useState([]);

  const fetchErrorWeekly = async () => {
    try {
      let errorData = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/weeklyerror`
      );
      let allError = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/errorlog`
      );
      setErrorWeekly(errorData.data);
      setErrorLog(allError.data);
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan saat fetch data");
    }
  };

  useEffect(() => {
    fetchErrorWeekly();
  }, []);

  console.log(errorLog[0]);

  return (
    <div className="error-container">
      <br />
      <div className="error-card">
        <div className="error-card-title">Error Records</div>
        <div className="error-card-body">
          <Table id="error-table" responsive striped bordered hover>
            <thead>
              <tr className="halo">
                <td rowSpan={2}>No.</td>
                <td rowSpan={2}>Error</td>
                <td colSpan={errorWeekly.length}>Date</td>
                <td rowSpan={2}>Temporary Solve</td>
                <td rowSpan={2}>Follow-Up</td>
              </tr>
              <tr className="halo">
                {errorWeekly.map((item) => (
                  <td>{item.date}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {errorLog.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  {errorWeekly.map((was) =>
                    was.errorName.length > 0 ? (
                      was.errorName.map((hai) => (
                        <td>
                          {hai.name === item ? <BiCheck size={20} /> : "-"}
                        </td>
                      ))
                    ) : (
                      <td>-</td>
                    )
                  )}
                  <td id={index}>haloo</td>
                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ErrorTable;
