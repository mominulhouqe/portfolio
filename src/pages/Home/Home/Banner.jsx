import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-800 py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-row-reverse md:justify-between items-center">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/sHhyQkq/mominn-removebg-preview.png"
              alt="Profile"
              className="w-96 mx-auto md:max-w-none"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              Hi, I'm
            </h2>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mominul Houqe
            </h1>
            <h4 className="text-gray-400 text-lg md:text-xl mb-6">MERN Stack Developer</h4>
            <p className="text-gray-400 leading-relaxed mb-8">
              Shot what able cold new the see hold. Friendly as an betrayed formerly he.
              Morning because as to society behaved moments.
            </p>
            <div>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg mr-4">
                <a href="#">Download CV</a>
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full shadow-lg">
                <a href="#">Contact</a>
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
