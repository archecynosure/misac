import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <div className="about__item">
                <img src="images\customer-service-agent.svg" alt="call center icon" />
                <p>DOSTUPNOST</p>
                <p>24/7 call centar</p>
            </div>
            <div className="about__item">
                <img src="images\shield.svg" alt="security icon" />
                <p>SIGURNOST</p>
                <p>bezbedne transakcije</p>
            </div>
            <div className="about__item">
                <img src="images\delivery-truck.svg" alt="delivery icon" />
                <p>BRZINA</p>
                <p>isporuka u najkraćem roku</p>
            </div>
        </div>
    )
}

export default About
