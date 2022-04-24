import React from 'react';
import NavBar from '../../NavBar/NavBar';
import Business from '../Business/Business';
import ContactHero from '../ContactHero/ContactHero';
import ContactMap from '../ContactMap/ContactMap';
import NewsLetter from '../NewsLetter/NewsLetter';
import Touch from '../Touch/Touch/Touch';

const Contacts = () => {
    return (
        <div>
            <ContactHero/>
            <NavBar/>
            <Business/>
            <Touch/>
            <ContactMap/>
            <NewsLetter/>
        </div>
    );
};

export default Contacts;