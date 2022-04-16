import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import './Main.css';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <>
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Footer />
            </main>
        </>
    );
}

export default Main; 