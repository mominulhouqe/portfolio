import React from 'react';
import ExamplePdf from './resumes.pdf';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className="bg-gray-800 py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-row-reverse md:justify-between items-center">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/2jQH8fv/Phone-Camera-2022-09-14-13-18-53-267.jpg"
              alt="Profile"
              className="w-96 rounded-full mx-auto md:max-w-none"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              Hi, I'm
            </h2>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mominul Houqe
            </h1>

            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                1000,
                'Frontend Developer',
                1000,
                'FullStack Developer',
                1000,
              ]}
              speed={50}
              style={{ fontSize: '1.5em' }}
              repeat={Infinity}
              className="text-gray-400 text-lg md:text-xl mb-6"
            />

            <p className="text-gray-400 leading-relaxed mb-8">
              Shot what able cold new the see hold. Friendly as an betrayed formerly he.
              Morning because as to society behaved moments.
            </p>
            <div>
              <button className="btn btn-primary text-white font-medium py-3 px-6 rounded-full shadow-lg mr-4">
                <a href={ExamplePdf} download className="text-white">
                  Download CV
                </a>
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full shadow-lg">
                <a href="#" className="text-gray-800">
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
