
import React from 'react';
import "./css/navbar_styles.css";
import { Link } from "react-router-dom"; 
function NavBar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top py-4">
            <div className="container">
                <span class="navbar-brand mb-0 h1 fw-bold fs-4" style={{ color: "#2B3467"}}>Universal Smart Academy</span>
                <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data="toggle"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/" class="nav-link active fs-5">Home</Link>
                        </li>
                        <li className="nav-item dropdown"> 
                            <a class="nav-link dropdown-toggle fs-5" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown"
                            aria-exanded="false">About</a>
                            <ul className="dropdown-menu slideIn" aria-labelledby="navbarDropdown">
                                <li><Link to="/mission" className="dropdown-item">
                                    Mission</Link></li>
                                <li><Link to="/mandatory-disclosure" className="dropdown-item">
                                    Mandatory Disclosure</Link></li>
                                <li><Link to="/academics" className="dropdown-item">
                                    Academics</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <Link to="/admissions" class="nav-link fs-5">Admissions</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/contact-us" class="nav-link fs-5">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar; 