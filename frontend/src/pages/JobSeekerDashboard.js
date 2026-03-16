import React from "react";
import JobSeekerSidebar from "../components/JobSeekerSidebar";
import "./JDashboard.css";

function JobSeekerDashboard() {
  return (
    <div className="dashboard">
      <JobSeekerSidebar />

      <div className="content">
        <h1>Job Seeker Dashboard</h1>

        <div className="cards">
          <div className="card">Available Jobs</div>
          <div className="card">Applied Jobs</div>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard; 