import React from 'react'
import Sidebar from '../components/Sidebar';
import "../styles/dashboard.css"
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <Sidebar />
        <div className='internship-container'>
            {/* Here is internships insights */}
            <h2>internships</h2>
        </div>
    </div>
  )
}

export default Dashboard