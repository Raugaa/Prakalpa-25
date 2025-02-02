// pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import globeWebm from "../../assets/landingPage/globe.webm";
import firstFrameFallback from "../../assets/landingPage/firstFrameFallback.png";
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

const LandingPage = () => {
    const homeBind = useSmoothScrollTo('#home');

    return (
        <div className="landingPageContainer" id="home" {...homeBind}>
            <main className="landingPageMain">
                <video className="videoBackground" autoPlay loop muted poster={firstFrameFallback}>
                    <source src={globeWebm} type="video/webm" />
                </video>
                <h2 className="abovePrakalpaTitle">ISTE KJSCE presents</h2>
                <h1 className="prakalpaTitle glow-effectForTitle">PRAKALPA '25</h1>
                <h4 className="prakalpaSubtxt">National Level Working Model Project Competition and paper presentation</h4>
                <h3 className="prakalpaSubtitle">Inovate To Elevate</h3>
            </main>
        </div>
    );
};

export default LandingPage;
