
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin</h2>

      <ul>
        <li>Dashboard</li>
        <li>Jobs</li>
        <li>Users</li>
        <li>Applications</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar; 