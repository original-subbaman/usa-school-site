import React from 'react';
import cbselogo from '../../res/cbselogo.png';
import booklogo from '../../res/book.png';
import campuslogo from '../../res/school.png';
import { motion } from 'framer-motion';

function InfoGridSection() {
    return (<section class="mb-5">
        <div className="container">
            <div className="container w-100 my-5 py-5">
                <h1 class="fw-bold text-start">Why Universal Smart Academy?</h1>
            </div>
            <div class="d-flex flex-md-row flex-column justify-content-sm-between">
                <div> 
                    <motion.div whileHover={{ scale: 1.1 }} className="col rounded p-4 bg-info">
                        <img src={cbselogo} width={99} height={100} alt="CBSE Logo" />
                        <h1 class="fw-bold">CBSE Affiliated</h1>
                    </motion.div>
                </div>
                <div class="mt-2 mb-2"> 
                    <motion.div whileHover={{ scale: 1.1 }} className="col rounded p-4 bg-warning">
                        <img src={booklogo} width={100} height={100} alt="Book logo" />
                        <h1 class="fw-bold">English Medium</h1>
                    </motion.div>
                </div>
                <div>
                    <motion.div whileHover={{ scale: 1.1 }} className="col rounded p-4 bg-success">
                        <img src={campuslogo} width={100} height={100} alt="Campus logo" />
                        <h1 class="fw-bold">Large campus</h1>
                    </motion.div>
                </div>
            </div>


            <div class="d-flex flex-row justify-content-between mt-4">
                <div>
                    <motion.div whileHover={{ scale: 1.2 }} class="col rounded">
                        <h1 class="fw-bold">60</h1>
                        <p class="lead">Years of Excellence</p>
                    </motion.div>

                </div>
                <div class="mx-sm-5">
                    <motion.div whileHover={{ scale: 1.2 }} class="col rounded">
                        <h1 class="fw-bold">62</h1>
                        <p class="lead">Experienced Teaching Staff</p>
                    </motion.div>
                </div>
                <div >
                    <motion.div whileHover={{ scale: 1.2 }} class="col rounded">
                        <h1 class="fw-bold">200</h1>
                        <p class="lead">Students enrolled</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>);
}

export default InfoGridSection;