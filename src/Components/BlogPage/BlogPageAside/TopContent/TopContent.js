import { Facebook, GitHub, LinkedIn, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react';
import './TopContent.css';

const TopContent = () => {
    return (
        <div style={{paddingBottom:'30px'}}>
            <div className="text-center">
                <img className='w-100 user'  src="https://i.ibb.co/2YyVTNK/young-woman-with-round-glasses-yellow-sweater-273609-7091.webp" alt="user" />
            </div>
            <p className="custom-title1 text-center my-4">I got lucky because I never gave up the search. Are you quitting too soon? Or, are you willing to pursue luck with a vengeance?</p>

            <div className='icons'>
                <Facebook className='icon facebook'></Facebook>
                <GitHub className='icon github'></GitHub>
                <Twitter className='icon twitter'></Twitter>
                <LinkedIn className='icon linkedin'></LinkedIn>
                <Pinterest className='icon pinterest'></Pinterest>
            </div>
        </div>
    );
};

export default TopContent;