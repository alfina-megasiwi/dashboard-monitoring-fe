import React from "react";
import "./Sidebar.css";
import Logo from "./logo.svg";
import { MdMonitor, MdError } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { RiFlowChart } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <img src={Logo} alt="logo-brifirst"></img>
        </div>
      </div>
      <div className="menu-container">
        <ul className="menu">
          <Link to="/">
            <li>
              <MdMonitor /> Monitoring
            </li>
          </Link>
          <Link to="/checklist-eod">
            <li>
              <TbChecklist /> Checklist EOD
            </li>
          </Link>
          <Link to="/">
            <li>
              <BsCardChecklist /> Checklist EOM
            </li>
          </Link>
          <Link to="/flow">
            <li>
              <RiFlowChart /> Flow
            </li>
          </Link>
          <Link to="/">
            <li>
              <MdError /> Error Log
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
