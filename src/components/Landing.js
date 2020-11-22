import React from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import Avatar from '../img/JedAvatar.png'
import './Landing.css'

const Landing = () => {
    return (
        <div className="Landing">
            <section className="Landing-hero">
                <Container fluid="md">
                    <div className="Landing-hero-content">
                        <Image 
                            src={`${Avatar}`}
                            alt="Jedediah Avatar"
                            className="Landing-avatar" 
                        />
                        <div className="Landing-heading">
                            <h1>Hi there, I'm Jed</h1>
                            <p>I'm currently employed as a frontend developer.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Landing;