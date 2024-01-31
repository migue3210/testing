import React from "react";
import './landing.css'
import Header from './header/header.js'
import HeroImage from '../assets/rescate.jpeg'


export default function Landing() {
    return (
        <div className="Landing">
            <section className="hero">
                <div className="filter">
                    <img src={HeroImage} alt="university" className="heroImage" />
                </div>
                <Header></Header>
                <div className="caption-container">
                    <h1 className="hero-text">Conecta con las <br></br> Agrupaciones Estudiantiles</h1>
                </div>
            </section>
            <section className="content">

            </section>
        </div>


    )
}

