import React from 'react';
import Image from 'react-bootstrap/Image'

import AboutHeroMobile from '../img/AboutHeroMobile.jpg'
import './About.css'

const About = () => {
    return (
        <div className="About">
            <section className="About-hero">
                <Image
                    src={`${AboutHeroMobile}`}
                    alt="Family Photo" 
                    className="About-hero-img" 
                    fluid 
                />
            </section>
        </div>
    )
}

export default About;