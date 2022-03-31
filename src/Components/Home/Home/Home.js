import React from 'react';
import NavBar from '../../NavBar/NavBar';
import CareFeatures from '../CareFeatures/CareFeatures';
import Testimonial from '../Testimonial/Testimonial';
import Welcome from '../Welcome/Welcome';
import PricingPlan from '../PricingPlan/PricingPlan';
import CaseStudies from '../CaseStudies/CaseStudies';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Welcome />
            <CareFeatures />
            <Testimonial />
            <PricingPlan />
            <CaseStudies />
        </div>
    );
};

export default Home;