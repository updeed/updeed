import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMember from '../../About/OurTeam/TeamMember/TeamMember';
// here TeamMember is shared component

const TeamSection = () => {
    const [members,setMembers] = useState([]);
    useEffect(()=>{
        fetch('./teamMembers.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div>
            <Container>
                <div className="text-center">
                <p style={{fontFamily:'cursive'}}>OUR TEAM</p>
                <h2>OUR PROFESSIONALS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui libero facilis eaque. Reprehenderit, accusantium?</p>
                </div>
            <Row style={{paddingTop:'50px'}} xs={1} md={4} className="g-4">
                     {
                         members.map(member => <TeamMember 
                            key={member.id}
                            member={member}></TeamMember>)
                     }
                 </Row>

            </Container>
            
            
        </div>
    );
};

export default TeamSection;