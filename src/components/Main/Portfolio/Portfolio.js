import React from 'react';
import './Portfolio.css';
import img from '../../../images/font-main.svg';


function Portfolio() {
    return (
        <div className="portfolio">
            <h5 className="portfolio__header">Портфолио</h5>
            <ul className="portfolio__list">
                <li className="portfolio__list-text">
                    <a href="https://github.com/NadinPhil/russian-travel" className="portfolio__link">Статичный сайт</a>
                    <img src={img} alt="Стрелка" className="portfolio__img" />
                </li>
                <li className="portfolio__list-text">
                    <a href="https://github.com/NadinPhil/russian-travel" className="portfolio__link">Адаптивный сайт</a>
                    <img src={img} alt="Фотография" className="portfolio__img" />
                </li>
                <li className="portfolio__list-text">
                    <a href="https://github.com/NadinPhil/react-mesto-api-full" className="portfolio__link">Одностраничное приложение</a>
                    <img src={img} alt="Фотография" className="portfolio__img" />
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;