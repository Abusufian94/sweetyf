import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../../utils/themeSlice';
import { FaUserCircle } from 'react-icons/fa'; // User icon for dropdown
import { MdLogout } from 'react-icons/md'; // Logout icon
import { BsSunFill, BsMoonFill } from 'react-icons/bs'; // Icons for light/dark mode toggle

const AdminHeader = () => {
  const isDarkMode = useSelector((state) => state.admintheme.isDarkMode);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility

  const toggleLogout = ()=>{
    setIsDropdownOpen(!isDropdownOpen); 
  }
  const handleLogout = () => {
    // Handle logout logic
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <header className="  w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Retail Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/path/to/logo.png" // Your logo path here
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="font-semibold text-lg">Retail Name</span>
        </div>

        {/* User and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Toggle Dark/Light Mode */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
          >
            {isDarkMode ? (
              <BsSunFill className="text-yellow-500 h-6 w-6" />
            ) : (
              <BsMoonFill className="text-blue-500 h-6 w-6" />
            )}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <FaUserCircle className="h-8 w-8 cursor-pointer" onClick={toggleLogout}/>
            {/* Dropdown (can be implemented as a hover or click event) */}
            {
              isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg">
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <MdLogout className="mr-2" />
                  Logout
                </button>
              </div>
              )
            }
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
