import React from 'react';
import Navbar from '../../shared/Navber';
import { Outlet } from 'react-router-dom';
import Projects from './Projects';
import Banner from './Banner';
import Experience from './Experience';
import Services from './Services';
import Skills from './Skills';
import Feedback from './Feedback';
import BlogSection from './BlogSection';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            {Outlet}
            <Banner />
            <Experience />
            <Services />
            <Skills />
          <Projects />
          <Feedback />
          <BlogSection />
          <Footer />
        </div>
    );
};

export default Home;