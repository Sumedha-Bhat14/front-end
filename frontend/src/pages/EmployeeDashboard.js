
import React from "react";
import EmployeeSidebar from "../components/EmployeeSidebar";
import "./Dashboard.css";

function EmployeeDashboard() {
  return (
    <div className="dashboard">
      <EmployeeSidebar />

      <div className="content">
        <h1> Employee Dashboard </h1>

        <div className="cards">
          <div className="card">Posted Jobs: 5</div>
          <div className="card">Applications: 20</div>
          <div className="card">Shortlisted: 8</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard; 