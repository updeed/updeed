import React from 'react';

const TouchLeft = () => {
    return (
        <div>
            <p className="custom-title1">GET IN TOUCH</p>
            <h2 className="custom-title2">Contact Us</h2>
            <p className="cusotm-title1 mb-5">I have worls-class, flexible support via live chat, email <br /> and phone. I guarantee that you’ll be able to have any <br /> issue resolved within 24 hours.</p>

            <div >
                <div style={{lineHeight:'10px'}}>
                <p className='custom-title2'>Phone:</p>
                <p className="custom-title1" style={{color:'blue'}}>8 800 2534 236</p>
                </div>

                <br />

                <div style={{lineHeight:'10px'}}>
                <p className="custom-title2">Send Email:</p>
                <p className='custom-title1'>email@example.com</p>
                <p className="custom-title1">email@yoursite.com</p>

                </div>
                
                <br />
                <div style={{lineHeight:'10px'}}>
                <p className="custom-title2">Address:</p>
                <p style={{lineHeight:'20px'}} className="custom-title1">27 Division St, New York, NY 10002, <br /> 
                United States</p>
                </div>

            </div>
        

        </div>
    );
};

export default TouchLeft;