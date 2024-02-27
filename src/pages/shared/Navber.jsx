import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaUser,
  FaCode,
} from "react-icons/fa";
import "./Navber.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <NavLink
        exact
        to="/"
        activeClassName="text-white bg-gray-700"
        className="text-gray-300 flex justify-center items-center space-x-5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        <FaHome className="mr-1" /> Home
      </NavLink>
      <NavLink
        to="/"
        activeClassName="text-white bg-gray-700"
        className="text-gray-300 flex justify-center items-center space-x-5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
      >
        <FaCode className="mr-1" /> Project
      </NavLink>
      <NavLink
        to="/"
        activeClassName="text-white bg-gray-700"
        className="text-gray-300 flex justify-center items-center space-x-5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        <FaUser className="mr-1" /> About
      </NavLink>
      <NavLink
        to="/"
        activeClassName="text-white bg-gray-700"
        className="text-gray-300 flex justify-center items-center space-x-5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        <FaBriefcase className="mr-1" /> Hire Me
      </NavLink>
    </>
  );

  return (
    <nav className="bg-slate-800 py-2 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              exact
              to="/"
              className="text-white font-bold w-12 rounded-full text-lg"
            >
              <img
                src="https://st3.depositphotos.com/5366154/13886/i/1600/depositphotos_138866570-stock-photo-fire-letter-m-of-burning.jpg"
                alt=""
                className="logo"
              />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">{menuItems}</div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{menuItems}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
