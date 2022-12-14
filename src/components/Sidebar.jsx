import React from 'react'
import NavLink from './NavLink'
import "../styles/sidebar.css"
// Image imports
import dashboardIcon from "../assets/dashboard-3.svg";
import radicalLogo from "../assets/RadicallX-Black-Logo 1.svg";
import apprenLogo from "../assets/medal-star.svg";
import internLogo from "../assets/book.svg";
import jobsLogo from "../assets/briefcase.svg";
import settingsLogo from "../assets/setting-2.svg";


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <img src={radicalLogo} className="nav-logo" alt="RadicalX"/>
        <NavLink title="Dashboard" image={dashboardIcon}/>
        <NavLink title="Apprenticeships" image={apprenLogo}/>
        <NavLink title="Internships" image={internLogo} isActive/>
        <NavLink title="Jobs" image={jobsLogo}/>
        <NavLink title="Settings" image={settingsLogo}/>
        <div className='nav-footer'>
            <p>Adam Scott</p>
        </div>
    </div>
  )
}

export default Sidebar