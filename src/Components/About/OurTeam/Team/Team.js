import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const [members,setMembers] = useState([]);
    useEffect(()=>{
        fetch('./teamMembers.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div style={{padding:'100px 0px'}}>
             <Container>
                 <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                     <div>
                     <p style={{fontFamily:'cursive'}}>OUR TEAM</p>
                        <h2>Our Professionals</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> <p>Facere nihil laborum ad quod at earum.</p>
                     </div>
                     <Button
                    sx={{
                        py: 2,
                        px: 3,
                        mr: 2,
                        fontSize: '12px',
                        fontWeight: '500',
                        fontFamily: 'Rubik',
                        border: '1px solid #03ef62',
                        backgroundImage: 'linear-gradient(96deg, #03ef62 0%, #1bb41d 100%)',
                        color: '#fff',
                        '&:hover': {
                            background: '#03ef62',
                            color: '#fff',
                            }
                        }}
                    >
                    Join Team
            </Button>
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

export default Team;