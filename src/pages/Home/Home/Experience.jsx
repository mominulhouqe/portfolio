import React from 'react';
import { FaHeadset, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import CountUp from 'react-countup';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap py-12 shadow-lg justify-center items-center bg-gradient-to-r from-slate-100 to-base-200 rounded-lg">
        <div className="w-full md:w-auto md:flex-1 flex items-center mb-6 md:mb-0">
          <span className="text-5xl md:text-6xl text-blue-500">
            <FaBriefcase />
          </span>
          <div className="ml-3 md:ml-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              <CountUp start={0} end={2} duration={2} /> Year of Experience
            </h1>
            <p className="text-gray-700">Job</p>
          </div>
        </div>
        <div className="w-full md:w-auto md:flex-1 flex items-center mb-6 md:mb-0 md:ml-8">
          <span className="text-4xl md:text-5xl text-green-500">
            <FaCheckCircle />
          </span>
          <div className="ml-3 md:ml-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              <CountUp start={0} end={60} duration={8} />+ Projects Completed
            </h1>
            <p className="text-gray-700">Projects</p>
          </div>
        </div>
        <div className="w-full md:w-auto md:flex-1 flex items-center">
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
