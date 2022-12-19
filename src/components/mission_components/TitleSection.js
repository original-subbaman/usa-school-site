import React from 'react';

function MissionTitle() {
    return (<section>
        <div className="container">
            <h1 className="fw-bold text-start" style={{ fontSize:"35px", color: "#EB455F"}}>Our Mission</h1>
            <div className="container" style={{ backgroundColor: "#EB455F" }}>
                <p className="text-white fs-3 lead p-5 text-start">In this paragraph we will state our mission in a short and succinct way</p>
            </div>
        </div>
    </section>);
}

export default MissionTitle;