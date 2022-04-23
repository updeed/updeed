import { Phone  , EmailOutlined , LocationCity} from '@mui/icons-material';
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{padding:'30px 0px'}}>
            <h4 className="custom-title1 mb-4">Contacts</h4>
            <p style={{display:'flex', alignItems:'center'}} className="custom-title1">
            <Phone style={{color:'blue'}} className='me-4'></Phone> 8 800 2563 123
            </p>
            <p style={{display:'flex', alignItems:'center'}} className="custom-title1">
                <EmailOutlined style={{color:'blue'}} className='me-4'></EmailOutlined> email@yoursite.com
            </p>
            <p style={{display:'flex', alignItems:'center'}} className="custom-title1">
                <LocationCity style={{color:'blue'}} className='me-4'></LocationCity> 27 Division St, New York, NY 10002, United States
            </p>
            
        </div>
    );
};

export default Contact;