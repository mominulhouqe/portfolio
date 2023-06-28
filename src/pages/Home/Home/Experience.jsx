import React from 'react';
import { FaHeadset, FaBriefcase, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="relative"> 
      <div className="flex  absolute right-5 -top-10 shadow-lg justify-center items-center bg-gradient-to-r from-slate-100 to-base-200 py-10 rounded-lg">
        <div className="flex items-center mb-6 lg:mb-0">
          <span className="text-5xl text-blue-500 ">
            <FaBriefcase />
          </span>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold">1 Year of Experience</h1>
            <p className="text-gray-700">Job</p>
          </div>
        </div>
        <div className="flex items-center mb-6 lg:mb-0 lg:ml-8">
          <span className="text-4xl text-green-500 ">
            <FaCheckCircle />
          </span>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold">60+ Projects Completed</h1>
            <p className="text-gray-700">Projects</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-4xl text-yellow-500 ">
            <FaHeadset />
          </span>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold">Online 24/7</h1>
            <p className="text-gray-700">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
