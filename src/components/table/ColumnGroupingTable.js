import { React, useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function ColumnGroupingTable({ type }) {
  const [errorWeekly, setErrorWeekly] = useState([]);
  const [week, setWeek] = useState([]);
  let allKey = [];

  const fetchWeek = async () => {
    try {
      if (type === "week") {
        let week = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/get-week`
        );
        setWeek(["25 ", "26 ", "27 ", "28 ", "29 ", "30 ", "31 "]);
      } else if (type === "month") {
        let week = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/get-month`
        );
        setWeek(week.data);
      } else {
        let week = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/get-year`
        );
        setWeek(week.data);
      }
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan saat fetch data week");
    }
  };

  const fetchErrorWeekly = async () => {
    try {
      if (type === "week") {
        let errorData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-week-error`
        );
        setErrorWeekly(errorData.data);
      } else if (type === "month") {
        let errorData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-month-error`
        );
        setErrorWeekly(errorData.data);
      } else {
        let errorData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-year-error`
        );
        setErrorWeekly(errorData.data);
      }
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan saat fetch data error mingguan");
    }
  };

  useEffect(() => {
    fetchErrorWeekly();
    fetchWeek();
    setInterval(fetchErrorWeekly, 1000 * 60 * 60);
    setInterval(fetchWeek, 1000 * 60 * 60);
  }, []);

  allKey = Object.keys(errorWeekly);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" rowSpan={2}>
                No
              </TableCell>
              <TableCell align="center" rowSpan={2}>
                Error
              </TableCell>
              <TableCell align="center" colSpan={week.length}>
                Date
              </TableCell>
              <TableCell align="center" rowSpan={2}>
                Keterangan
              </TableCell>
            </TableRow>
            <TableRow>
              {week.map((itm) => (
                <TableCell>{itm.substring(0, 3)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allKey.map((key, idx) => (
              <TableRow>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{key}</TableCell>
                {errorWeekly[key].map((itm, id) => (
                  <TableCell>
                    {itm.length > 0 && id == errorWeekly[key].length - 1 ? (
                      <ul>
                        {itm.map((test) => (
                          <li>
                            <b>
                              {test[0]} ({test[2]}):
                            </b>{" "}
                            {test[1]}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      itm
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
