import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/sidebarSlice';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`h-screen bg-gray-800 text-white h-full transition-all duration-1500 ${isOpen ? 'w-64' : 'w-15'}`}>
      
      <ul className="">
        <li className="flex my-3  justify-between items-center p-2   cursor-pointer">
        <button onClick={handleToggle} className="text-white">
          <AiOutlineMenu className="text-2xl" />
        </button>
        {isOpen && <span className="ml-2"><button onClick={handleToggle} className="text-white">
          <IoMdClose className="text-2xl" />
        </button></span>}

        

        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <AiOutlineHome className="text-2xl" />
          {isOpen && <span className="ml-2">Manage Retail</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <AiOutlineHome className="text-2xl" />
          {isOpen && <span className="ml-2">Manage Inventory</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <AiOutlineUser className="text-2xl" />
          {isOpen && <span className="ml-2">Manage Users</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <AiOutlineLogout className="text-2xl" />
          {isOpen && <span className="ml-2">Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
