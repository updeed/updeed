import React from 'react';
import NavBar from '../../NavBar/NavBar';
import Testimonial from '../Testimonial/Testimonial';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Welcome />
            <Testimonial />
        </div>
    );
};

export default Home;