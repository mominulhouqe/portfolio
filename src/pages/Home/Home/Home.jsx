import React from 'react';
import Navbar from '../../shared/Navber';
import { Outlet } from 'react-router-dom';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Navbar />
            {Outlet}
          <Projects />
        </div>
    );
};

export default Home;