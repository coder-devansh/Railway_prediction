import React from "react";
import "./Dashboard.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const earningsData = {
    labels: ["This Week", "Last Week", "Total"],
    datasets: [
      {
        data: [50, 30, 80],
        backgroundColor: ["#3498db", "#2ecc71", "#f1c40f"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Rainwater Collected</h3>
          <p>Total: <strong>250L</strong></p>
          <p>This Week: <strong>50L</strong></p>
        </div>
        <div className="card">
          <h3>Earnings</h3>
          <Doughnut data={earningsData} />
        </div>
        <div className="card">
          <h3>Community Rank</h3>
          <p><strong>#5</strong> in leaderboard</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;