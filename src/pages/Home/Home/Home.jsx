import React from 'react';
import Navbar from '../../shared/Navber';
import { Outlet } from 'react-router-dom';
import Projects from './Projects';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Navbar />
            {Outlet}
            <Banner />
          <Projects />
        </div>
    );
};

export default Home;