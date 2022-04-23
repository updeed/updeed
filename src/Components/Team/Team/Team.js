import React from 'react';
import Testimonial from '../../Home/Testimonial/Testimonial';
import NavBar from '../../NavBar/NavBar';
import Blogs from '../BlogSection/Blogs/Blogs';
import TeamExperience from '../TeamExperience/TeamExperience/TeamExperience';
import TeamHero from '../TeamHero/TeamHero';
import TeamSection from '../TeamSection/TeamSection';
import WorkProcess from '../WorkProcess/WorkProcess';

const Team = () => {
    return (
        <div>
            {/* using about hero for checking , needs update */}
            <NavBar/>
            <TeamHero/>
            <TeamExperience/>
            <TeamSection/>
            <WorkProcess/>
            {/* done again but used frm homepage */}
            {/* <Testimony/> */}
            <Testimonial/>
            <Blogs/>
        </div>
    );
};

export default Team;