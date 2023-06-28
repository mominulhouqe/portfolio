import React from 'react';
import Navbar from '../../shared/Navber';
import { Outlet } from 'react-router-dom';
import Projects from './Projects';
import Banner from './Banner';
import Experience from './Experience';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar />
            {Outlet}
            <Banner />
            <Experience />
            <Services />
          <Projects />
        </div>
    );
};

export default Home;