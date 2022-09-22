import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Monitoring from "./page/Monitoring/Monitoring";
import Flow from "./page/Flow/Flow";
import Sidebar from "./components/Sidebar/Sidebar";
import ChecklistEOD from "./page/ChecklistEOD/ChecklistEOD";
import ChecklistEOM from "./page/ChecklistEOM/ChecklistEOM";
import ErrorLog from "./page/ErrorLog/ErrorLog";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
// import useWindowDimensions from "./tools/useWindowDimensions"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);
  // const { height, width } = useWindowDimensions();
  // console.log(height);
  // console.log(width);

  return (
    <Router>
      <div className="App">
        <div
          className="content"
          style={{ marginLeft: isOpen ? "280px" : "110px" }}
        >
          <Sidebar isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<Monitoring />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/checklist-eod" element={<ChecklistEOD />} />
            <Route path="/checklist-eom" element={<ChecklistEOM />} />
            <Route path="/error-log" element={<ErrorLog />} />
          </Routes>
        </div>
        {isOpen ? (
          <div className="shrink side" onClick={toogle}>
            <FaAngleDoubleLeft size={30} />
          </div>
        ) : (
          <div className="expand side" onClick={toogle}>
            <FaAngleDoubleRight size={30} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
