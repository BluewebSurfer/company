import React from 'react'
import './ScrollCards.css'

function ScrollCards() {
    return (
        <div className="scrollcards">
            <a className="first" href="#">
                <div className="scrollcard one">
                    <h1>Web Development</h1>
                </div>
            </a>
            <a href="#">
                <div className="scrollcard two">
                    <h1>Digital Marketing</h1>
                </div>
            </a>
            <a href="#">
                <div className="scrollcard three">
                    <h1>Graphic Design</h1>
                </div>
            </a>
        </div>
    )
}

export default ScrollCards
