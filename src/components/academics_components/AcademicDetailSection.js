import { motion } from 'framer-motion';
import React from 'react';
import DetailCard from './DetailCard';
function AcademicDetail() {
    const animationDuration = 1.1; 
    const eduDetails =
        [
            { title: "CBSE Affiliated", body: "We are affiliated to Central Board of Secondary Education, so suck on that!", id: 1 },

            { title: "English Medium", body: "We speak English so good even Great Britain can't understand us.", id: 2 },

            { title: "Expert Faculty", body: "Our faculty have all hiked to Kedarnath and completed yoga program from Ramdev Baba", id: 3 },

            { title: "Extracurriculars", body: "Hunting, Yak riding, Ghas Cutting, we've got it all", id: 4 }

        ]
    return (
        <section className='mb-4'>
            <div className="container">
                <div className="row">
                    <div className="col mb-2 mb-sm-0">
                        <motion.div animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ ease: "easeOut", duration: animationDuration }}>
                            <DetailCard detail={eduDetails[0]} />
                        </motion.div>
                    </div>
                    <div className="col mb-2 mb-sm-0">
                        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ ease: "easeOut", duration: animationDuration }}>
                            <DetailCard detail={eduDetails[1]} />
                        </motion.div>
                    </div>
                    <div className="col mb-2 mb-sm-0">
                        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ ease: "easeOut", duration: animationDuration }}>
                            <DetailCard detail={eduDetails[2]} />
                        </motion.div>
                    </div>
                    <div className="col mb-2 mb-sm-0">
                        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ ease: "easeOut", duration: animationDuration }}>
                            <DetailCard detail={eduDetails[3]} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>);
}

export default AcademicDetail;