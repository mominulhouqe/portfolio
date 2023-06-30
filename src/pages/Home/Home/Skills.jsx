import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { DiBootstrap, DiNodejs, DiMongodb, DiExtjs } from 'react-icons/di';
import ProgressBar from '@ramonak/react-progress-bar';

const Skills = () => {
  return (
   <div className='bg-[#FDF8F7]'>
     <div className=" container mx-auto px-4">
      <div className="text-center">
        <h1 className="font-semibold text-yellow-500 text-2xl">Why Choose Me</h1>
        <h1 className="text-4xl font-bold mb-5">My Experience Area</h1>
     <hr />
      </div> 

      <div className="flex gap-10 justify-center mt-8">
        <div className="w-1/2">
          <div className="mb-8 ">
            <h3 className="text-lg  font-bold">HTML</h3>
            <FaHtml5 className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={95} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">CSS</h3>
            <FaCss3Alt className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={90} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">Bootstrap</h3>
            <DiBootstrap className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={90} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">Tailwind CSS</h3>
            <FaReact className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={85} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">JavaScript</h3>
            <FaJs className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={80} />
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-8">
            <h3 className="text-lg font-bold">React</h3>
            <FaReact className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={85} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">Node.js</h3>
            <DiNodejs className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={65} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">Express.js</h3>
            <DiExtjs className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={60} />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold">MongoDB</h3>
            <DiMongodb className="text-4xl mb-2 text-blue-500" />
            <ProgressBar completed={50} />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Skills;
