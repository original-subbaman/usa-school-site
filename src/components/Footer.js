import React from 'react';
import './css/home_styles.css'; 
function Footer() {
    return (
        <footer class="bg-dark text-white pt-4">
            <div class="container text-left">
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
                        <h5 class="text-uppercase mb-4 fw-bold">Universal Smart Academy</h5>
                        <p>Acadmey Bandukey Uttarey</p>
                        <p>West Sikkim, PIN: 737138</p>
                        <p>Sikkim, India</p>
                    </div>
                    <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
                        <h5 class="text-uppercase mb-4 fw-bold">Contact Us</h5>
                        <p>phulmotimemousa@gmail.com</p>
                        <p>Mobile: +91 9734085513</p>
                        <p>Residence: 253326</p>
                    </div>
                </div>
            </div>
        </footer>);
}

export default Footer;