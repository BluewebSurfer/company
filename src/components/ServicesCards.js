import React from 'react'
import './ServicesCards.css'
import WebGif from "../assets/img/webd.gif"
import DigitalGif from "../assets/img/digitalm.gif"

function ServicesCards() {
    return (
        <div className="servicescards">
            <div className="servicescards-row">
                <div className="servicescards-img">
                    <img src={WebGif} alt="Web Development"/>
                </div>
                <div className="servicescards-content">
                    <h1>Web Development</h1>
                    <p>We know that your business is unique and so are our websites. We establish a strong presence of your business in the e-market creative designing team invests energy to comprehend your business objectives & target corner before beginning the outlining process.</p>
                    <button>Explore More</button>
                </div>
            </div>
            <div className="servicescards-row reverse">
                <div className="servicescards-img">
                    <img src={DigitalGif} alt="Web Development"/>
                </div>
                <div className="servicescards-content">
                    <h1>Digital Marketing</h1>
                    <p>At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands.</p>
                    <button>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards
