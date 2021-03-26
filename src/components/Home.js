import React from 'react'
import Header from './Header'
import './Home.css'
import Services from './Services'
import ServicesCards from './ServicesCards'
import SmallBanner from './SmallBanner'
import DevelopmentSteps from './DevelopmentSteps'
import WhyChooseUs from './WhyChooseUs'
import ScrollCards from './ScrollCards'
import OurPlans from './OurPlans'

function Home() {
    return (
        <div>
            <Header />
            <Services />
            <ServicesCards />
            <SmallBanner />
            <DevelopmentSteps />
            <WhyChooseUs />
            <ScrollCards />
            <OurPlans />
        </div>
    )
}

export default Home
