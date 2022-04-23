import React from 'react';
import NavBar from '../../NavBar/NavBar';
import AboutHero from '../AboutHero/AboutHero';
import AboutUs from '../AboutUs/AboutUs/AboutUs';
import Team from '../OurTeam/Team/Team';
import WhatWeDo from '../WhatWeDo/WhatWeDo/WhatWeDo';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs/WhyChooseUs';

const About = () => {
    return (
        <div>
            <NavBar/>
            <AboutHero/>
           <AboutUs/> 
           <WhatWeDo/>
           <WhyChooseUs/>
           <Team/>
        </div>
    );
};

export default About;