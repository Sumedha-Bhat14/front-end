
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function EmployeeSidebar() {
  return (
    <div className="sidebar">
      <h2>Employee</h2>

      <ul>
        <li><Link to="/employee">Dashboard</Link></li>
        <li><Link to="/add-job">Add Job</Link></li>
        <li><Link to="/manage-jobs">Manage Jobs</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
}

export default EmployeeSidebar;