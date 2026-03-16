
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function JobSeekerSidebar() {
  return (
    <div className="sidebar">
      <h2>Job Seeker</h2>

      <ul>
        <li><Link to="/jobseeker">Dashboard</Link></li>
        <li><Link to="/view-jobs">View Jobs</Link></li>
        <li><Link to="/my-applications">My Applications</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
}

export default JobSeekerSidebar; 