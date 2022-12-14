import React from "react";
import "../styles/sidebar.css";

const NavLink = ({ image, title, isActive }) => {
  return (
    <div className={isActive ? "active-link" : "nav-link"}>
      <img src={image} alt="" />
      <p className="link-title">{title}</p>
    </div>
  );
};

export default NavLink;
