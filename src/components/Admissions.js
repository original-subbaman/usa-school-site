import React from 'react';

function Admissions() {
    return (
        <div className="d-flex flex-column flex-sm-row p-4 ">
            <div class="container p-4 me-2 mw-100" style={{ backgroundColor: "#E3F2FD" }}>
                <h1 class=" fw-bold fs-1 text-start mb-4" style={{ color: "#1A237E" }}>How to Apply</h1>
                <p class="lead text-start">This is a great space to write a long text about your company and your services.
                    You can use this space to go into a little more detail about your company.
                    Talk about your team and what services you provide. Tell your visitors the story of how you came
                    up with the idea for your business and what makes you different from your competitors.
                    Make your company stand out and show your visitors who you are.</p>
            </div>
            <div class="container p-4 ms-sm-2 mt-sm-0 mt-4 mw-100" style={{ backgroundColor: "#90CAF9" }}>
                <h1 class=" fw-bold fs-1 text-start mb-4" style={{ color: "#1A237E" }}>Tuition</h1>
                <p class="lead text-start">This is a great space to write a long text about your company and your services.
                    You can use this space to go into a little more detail about your company.
                    Talk about your team and what services you provide. Tell your visitors the story of how you came
                    up with the idea for your business and what makes you different from your competitors.
                    Make your company stand out and show your visitors who you are.</p>
                <a href='' class="fw-bold float-start" style={{ color: "#1A237E"}}>Tuition & Fees</a>
            </div>
        </div>
    );
}

export default Admissions;