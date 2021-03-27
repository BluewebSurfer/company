import React from 'react'
import './WhatWeDo.css'
import LaptopImg from "../assets/img/anete-lusina-zwsHjakE_iI-unsplash.jpg";

function WhatWeDo() {
    return (
        <div className="whatwedo">
            <h1>This is what we do</h1>
            <div className="whatwedo-card">
                <div className="whatwedo-content">
                    <p>
                    BlueWeb Surfer Website Development Company from Siliguri,
Provide Exclusive services of SEO friendly Website Design, Web
Hosting, Search Engine Optimization, Domain Registration,
Graphic Design, Mobile App Development, Digital Marketing,
Web-Based Application for all its Customers. Blueweb surfer
specialized in customize websites.
                    </p>
                </div>
                <div className="whatwedo-img">
                    <img src={LaptopImg} />
                </div>

            </div>
        </div>
    )
}

export default WhatWeDo
