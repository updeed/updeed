import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamExperienceLeft from '../TeamExperienceLeft/TeamExperienceLeft';
import TeamExperienceRight from '../TeamExperienceRight/TeamExperienceRight';

const TeamExperience = () => {
    return (
        <div>
            <Container>
                <Row xs={1} md={2}>
                    <TeamExperienceLeft/>
                    <TeamExperienceRight/>
                </Row>
            </Container>
        </div>
    );
};

export default TeamExperience;