import React from 'react'
import './Header.css';
import CompanyLogo from "../assets/img/BluewebSurferLogo.gif";

function Header() {
    return (
        <div className="bg-img container">
    <header>
        <nav>
            <div className="logo">
                <img src={CompanyLogo} alt="BluewebSurferLogo" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li className="dropdown">
                        <div className="dropdownbtn">Services</div>
                        <div className="dropdown-content">
                            <a href="#">Payment Gateway</a>
                            <a href="#">Website Maintainance</a>
                            <a href="#">Content Writing</a>
                        </div>    
                    </li>
                    <li><a href="">About</a></li>
                    <li className="dropdown">
                        <div className="dropdownbtn">Our Plan</div>
                        <div className="dropdown-content">
                            <a href="#">Static Website</a>
                            <a href="#">Dynamic Website</a>
                            <a href="#">E-commerce Website</a>
                            <a href="#">Business Website</a>
                            <a href="#">Web Hosting</a>
                            <a href="#">Logo Design</a>
                        </div>    
                    </li>
                    <li><a href="#">Demo</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="javascript:void(0);" className="icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                      </a></li>
                </ul>
            </div>
        </nav>

        <div className="front-text">
            <h1>Blueweb surfer</h1>
            <h1>specialized in</h1> 
            <h1>customize websites.</h1>
        </div>

    </header>
</div>
    )
}

export default Header
