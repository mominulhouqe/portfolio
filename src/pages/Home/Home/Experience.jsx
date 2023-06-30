import React from 'react';
import { FaHeadset, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import CountUp from 'react-countup';

const Experience = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row lg:space-x-5 lg:px-4 absolute lg:right-5 -top-10 shadow-lg justify-center items-center bg-gradient-to-r from-slate-100 to-base-200 py-10 rounded-lg">
        <div className="flex items-center mb-6 md:mb-0">
          <span className="text-5xl md:text-6xl text-blue-500">
            <FaBriefcase />
          </span>
          <div className="ml-3 md:ml-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              <CountUp start={0} end={1} duration={2} /> Year of Experience
            </h1>
            <p className="text-gray-700">Job</p>
          </div>
        </div>
        <div className="flex items-center mb-6 md:mb-0 md:ml-8">
          <span className="text-4xl md:text-5xl text-green-500">
            <FaCheckCircle />
          </span>
          <div className="ml-3 md:ml-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              <CountUp start={0} end={60} duration={3} />+ Projects Completed
            </h1>
            <p className="text-gray-700">Projects</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-4xl md:text-5xl text-yellow-500">
            <FaHeadset />
          </span>
          <div className="ml-3 md:ml-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Online 24/7</h1>
            <p className="text-gray-700">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
