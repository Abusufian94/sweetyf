import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 Sweet Shop. All rights reserved.</p>
        <div className="mt-4">
          <a className="text-gray-400 hover:text-white px-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
