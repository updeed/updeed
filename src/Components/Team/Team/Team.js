import React from 'react';
import Testimonial from '../../Home/Testimonial/Testimonial';
import Blogs from '../BlogSection/Blogs/Blogs';
import TeamExperience from '../TeamExperience/TeamExperience/TeamExperience';
import TeamSection from '../TeamSection/TeamSection';
import WorkProcess from '../WorkProcess/WorkProcess';

const Team = () => {
    return (
        <div>
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