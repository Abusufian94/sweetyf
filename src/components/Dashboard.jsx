import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser,  AiOutlineLogout } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    // Redirect to login (you can use react-router here)
  };

  return (
    <div className=" col-span-10  ">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat architecto nobis et illo nulla harum eveniet? Harum consequuntur, rerum minima iusto natus a, impedit, nihil nobis unde ipsam saepe tenetur?</p>
 
    </div>
  );
};

export default Dashboard;
