import React from 'react';
import Caption from '../Caption/Caption';
import './AboutMe.css';
import photo from '../../../images/photo_myself.jpg';

function AboutMe() {
    return (
        <div className="myself">
            <Caption name={"Студент"} />
            <div className="myself__info">
                <div className="myself__text">
                    <h4 className="myself__name">Надежда</h4>
                    <p className="myself__profile">Фронтенд-разработчик, 26 лет</p>
                    <p className="myself__about">Я родилась в Уфе, живу в Уссурийске, закончила нефтегазовое дело УГНТУ. Я люблю слушать музыку, читать книги и ездить на море. Недавно начала заниматься веб-разработкой. С 2017 года работала инженером на произодственных площадках. После того, как прошла курс по веб-разработке, начала искать работу Front-end разработчиком и ушла с постоянной работы.</p>
                    <div className="myself__links">
                        <a href="https://vk.com/piupiu_piu" className="myself__link">VK</a>
                        <a href="https://github.com/NadinPhil" className="myself__link">Github</a>
                    </div>
                </div>
                <img src={photo} alt="Фотография" className="myself__photo" />
            </div>
        </div>
    )
}

export default AboutMe;