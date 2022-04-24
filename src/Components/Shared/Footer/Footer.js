import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div style={{paddingTop:'100px' , backgroundColor:'#6254e7',color:'white'}}>
            <FooterTop/>
            <FooterBottom/>
            <p className="custom-title1 text-center py-3">© 2022 — Updeed. All Rights Reserved.

</p>
        </div>
    );
};

export default Footer;