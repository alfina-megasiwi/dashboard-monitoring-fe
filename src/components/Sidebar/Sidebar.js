import React from "react";
import { MdMonitor, MdError } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { BiCalendarCheck } from "react-icons/bi";
import { RiFlowChart } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const menuItem = [
    {
      path: "/",
      name: "Monitoring",
      icon: <MdMonitor size={30} />,
    },
    {
      path: "/checklist-eod",
      name: "Checklist EOD",
      icon: <TbChecklist size={30} />,
    },
    {
      path: "/checklist-eom",
      name: "Checklist EOM",
      icon: <BiCalendarCheck size={30} />,
    },
    {
      path: "/flow",
      name: "Flow",
      icon: <RiFlowChart size={30} />,
    },
    {
      path: "/error-log",
      name: "Error Log",
      icon: <MdError size={30} />,
    },
  ];

  return (
    <div className="contained">
      <div className="sidebar" style={{ width: isOpen ? "250px" : "80px" }}>
        <div className="logo-container">
          <div className="logo">
            <img
              src={Logo}
              style={{ width: isOpen ? "240px" : "50px" }}
              alt="logo-brifirst"
            ></img>
          </div>
        </div>
        <div className="menu-container">
          <ul className="menu">
            {menuItem.map((item) => (
              <Link to={item.path}>
                {isOpen ? (
                  <li className="centered-label">
                    {item.icon} {item.name}
                  </li>
                ) : (
                  <li className="centered-label">{item.icon}</li>
                )}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
