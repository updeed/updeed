import React from 'react';
import { CircularProgressbar ,buildStyles  } from 'react-circular-progressbar';

const WhatWeDoRight = () => {
    const percentage = 66;


    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
                <div style={{ width: 250, height: 200 }}>
                <CircularProgressbar
                strokeWidth={4}
                value={percentage}
                 text={`${percentage}%`}
                styles={buildStyles({
                rotation: 0.35,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(86, 64, 216, ${percentage / 100})`,
                textColor: '#f88',
                trailColor: 'rgba(242, 29, 139, 0.04)',
                backgroundColor: '#3e98c7',
                })}
                />
                </div>
                <div  className="ps-3">
                <h3 style={{color:'rgba(86, 64, 216)'}}>Creative Approach</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cum delectus, dolorum maiores quibusdam totam.</p>
                </div>
            </div>


            <div style={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
                <div style={{ width: 250, height: 200 }}>
                <CircularProgressbar
                strokeWidth={4}
                value={percentage}
                 text={`${percentage}%`}
                styles={buildStyles({
                rotation: 0.35,
                strokeLinecap: 'butt',
                textSize: '20px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255, 150, 51, ${percentage / 100})`,
                textColor: '#f88',
                trailColor: 'rgba(242, 29, 139, 0.04)',
                backgroundColor: '#3e98c7',
                })}
                />
                </div>
                <div  className="ps-3">
                <h3 style={{color:'rgba(255, 150, 51, 0.81)'}}>Guaranteed Success</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cum delectus, dolorum maiores quibusdam totam.</p>
                </div>
            </div>


            <div style={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
                <div style={{ width: 250, height: 200 }}>
                <CircularProgressbar
                strokeWidth={4}
                value={percentage}
                 text={`${percentage}%`}
                styles={buildStyles({
                rotation: 0.35,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(0,199, 119, ${percentage / 100})`,
                textColor: '#f88',
                trailColor: 'rgba(242, 29, 139, 0.04)',
                backgroundColor: '#3e98c7',
                })}
                />
                </div>
                <div  className="ps-3">
                <h3 style={{color:'rgba(0, 199, 119, 1)'}}>SEO Optimization</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cum delectus, dolorum maiores quibusdam totam.</p>
                </div>
            </div>
            
        </div>
    );
};

export default WhatWeDoRight;