import React from 'react';
import IntroSection from './home_components/IntroSection';
import MissionSection from './home_components/MissionSection';
import InfoGridSection from './home_components/QuickInfoSection';
function Home() {
    return (
        <div class="container w-100 mw-100 p-0">
            <IntroSection/>
            <MissionSection /> 
            <InfoGridSection />
        </div>
        );
}

export default Home;