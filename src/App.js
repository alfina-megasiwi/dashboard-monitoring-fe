import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Monitoring from "./page/Monitoring/Monitoring";
import Flow from "./page/Flow/Flow";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Monitoring />} />
            <Route path="/flow" element={<Flow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
