import React from 'react';
import img from '../../res/splash1.png';
import '../css/home_styles.css';
import '../css/home_styles.css';
function IntroSection() {
    return (
        <section>
            <div class="d-flex flex-column flex-sm-row">  
                <div class="d-sm-flex bg-danger px-5 align-items-center flex-fill order-1 ">
                    <div class="container p-5 pt-sm-4">
                        <h1 class="text-start text-white"><b>Universal Smart Academy</b></h1>
                        <p class="text-start text-white lead">A Great Place to Learn, Grow, and Excell</p>
                    </div>
                </div>
                <div class="d-sm-flex flex-fill order-2">
                    <img src={img} class="center-cropped"  alt={"School children"} />
                </div>
            </div>
        </section>);
}

export default IntroSection;