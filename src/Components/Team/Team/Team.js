import React from 'react';
import TeamExperience from '../TeamExperience/TeamExperience/TeamExperience';
import TeamSection from '../TeamSection/TeamSection';
import Testimony from '../Testimony/Testimony/Testimony';
import WorkProcess from '../WorkProcess/WorkProcess';

const Team = () => {
    return (
        <div>
            <TeamExperience/>
            <TeamSection/>
            <WorkProcess/>
            <Testimony/>
        </div>
    );
};

export default Team;