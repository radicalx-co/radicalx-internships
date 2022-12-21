import React from "react";
import Graph from "../components/Graph";
import Sidebar from "../components/Sidebar";
import TextContainer from "../components/TextContainer";
import "../styles/dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="internship-container">
        {/* Here is internships insights */}
        <div className="title-container">
          <h2>Internships</h2>
          <button className="purple-btn">Create New Internships</button>
        </div>
        <div className="insights-container">
          <TextContainer
            title="Internship Insights"
            description="In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic."
          />
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
