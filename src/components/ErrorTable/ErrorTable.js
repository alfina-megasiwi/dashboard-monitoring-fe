import { React, useEffect, useState } from "react";
import "./ErrorTable.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCheck } from "react-icons/bi";
import axios from "axios";

const ErrorTable = () => {
  const [errorWeekly, setErrorWeekly] = useState([]);
  const [oldLog, setOldLog] = useState([]);
  const [errorLog, setErrorLog] = useState([]);
  let arrtempo = [2];

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
      alert("Terdapat kesalahan saat fetch data error mingguan");
    }
  };

  const fetchErrorLog = async () => {
    try {
      let oldError = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/errorlog`
      );
      setOldLog(oldError.data);
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan saat fetch error log");
    }
  };

  useEffect(() => {
    fetchErrorWeekly();
    fetchErrorLog();
  }, []);

  let lengtharr = errorWeekly.length;
  for (let i = 0; i < lengtharr; i++) {
    let arrname = errorWeekly[i].errorName;
    for (const element of arrname) {
      if (errorLog.includes(element.name) == false) {
        errorLog.push(element.name);
      }
    }
  }

  return (
    <div className="error-container">
      <br />
      <div className="error-card">
        <div className="error-card-title">Error Records</div>
        <div className="error-card-body">
          <Table id="error-table" responsive striped bordered>
            <thead>
              <tr className="halo">
                <td rowSpan={2}>No.</td>
                <td rowSpan={2}>Error</td>
                <td colSpan={errorWeekly.length}>Date</td>
                <td rowSpan={2}>Temporary Solve</td>
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
                  <td
                    style={{ color: oldLog.includes(item) ? "black" : "red" }}
                  >
                    {index + 1}.
                  </td>
                  <td
                    style={{ color: oldLog.includes(item) ? "black" : "red" }}
                  >
                    {item}
                  </td>
                  {errorWeekly.map((itm) => (
                    <td
                      style={{ color: oldLog.includes(item) ? "black" : "red" }}
                    >
                      {itm.errorName.map((r) =>
                        r.name === item ? <BiCheck size={25} /> : ""
                      )}
                    </td>
                  ))}

                  {arrtempo.map(() => (
                    <td
                      style={{ color: oldLog.includes(item) ? "black" : "red" }}
                    >
                      {errorWeekly.map((alo) => (
                        <div>
                          {alo.errorName.map((r) =>
                            r.name === item ? alo.solvingError : ""
                          )}
                        </div>
                      ))}
                    </td>
                  ))}
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
