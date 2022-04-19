import React from 'react';
import AboutUs from '../AboutUs/AboutUs/AboutUs';
import Team from '../OurTeam/Team/Team';
import WhatWeDo from '../WhatWeDo/WhatWeDo/WhatWeDo';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs/WhyChooseUs';

const About = () => {
    return (
        <div>
           <AboutUs/> 
           <WhatWeDo/>
           <WhyChooseUs/>
           <Team/>
        </div>
    );
};

export default About;