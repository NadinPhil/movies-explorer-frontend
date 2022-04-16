import React from 'react';
import Header from '../../Header/Header';
import './Promo.css';
import promo from '../../../images/landing-logo.svg';

function Promo() {
    return (
        <div className="promo">
            <Header location={"/"}/>
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={promo} alt="Рисунок Promo" className="promo__logo"  />
        </div>
    )
}

export default Promo;