
import React from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <h1> Admin Dashboard </h1>

        <div className="cards">
          <div className="card">Total Jobs: 10</div>
          <div className="card">Users: 25</div>
          <div className="card">Applications: 40</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;