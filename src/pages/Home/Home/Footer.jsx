import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-8">
          <a
            href="https://github.com/mominulhouqe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mominul-hoque-290340217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-gray-400 mb-4">Connect with me on social media:</p>
        <p className="text-gray-400 mb-4">Email: mominulhauqe14@gmail.com</p>
        <p className="text-gray-400 mb-4">Phone: +8801937985805</p>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
