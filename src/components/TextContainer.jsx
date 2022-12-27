import React from "react";
import "../styles/dashboard.css";
const TextContainer = ({ title, description }) => {
  return (
    <div className="text-container">
      <h3>{title}</h3>
      <br />
      <p>{description}</p>
    </div>
  );
};

export default TextContainer;
