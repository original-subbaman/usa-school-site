import React from 'react';
import img from '../../res/img2.png';
import { Link } from 'react-router-dom';
import '../css/home_styles.css'; 
function MissionSection() {
    return (
        <section>
                <div className="d-flex bg-primary flex-column flex-sm-row">
                    <div class="align-self-start flex-fill order-2 order-sm-1">
                        <img src={img} class="w-100" alt={"Children playing"}/>
                    </div>
                    <div class="d-flex flex-fill order-1 order-sm-2 align-self-center mx-5">
                        <div class="container py-5">
                            <h1 class="text-start fw-bold text-white">Mission</h1>
                            <p class="text-start lead text-white">To deliver excellent education.</p>
                            <Link to="/mission" class="text-white fw-bold float-start">Learn More</Link>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default MissionSection;