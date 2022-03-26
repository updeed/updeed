import React from 'react';
import NavBar from '../../NavBar/NavBar';
import CareFeatures from '../CareFeatures/CareFeatures';
import Testimonial from '../Testimonial/Testimonial';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Welcome />
            <CareFeatures />
            <Testimonial />
        </div>
    );
};

export default Home;