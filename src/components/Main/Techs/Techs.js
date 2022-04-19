import React from 'react';
import Caption from '../Caption/Caption';
import './Techs.css';

function Techs() {
    return (
        <div className="techs">
            <Caption name={"Технологии"} />
            <div className="techs__info">
                <h3 className="techs__header">7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__list-text">HTML</li>
                    <li className="techs__list-text">CSS</li>
                    <li className="techs__list-text">JS</li>
                    <li className="techs__list-text">React</li>
                    <li className="techs__list-text">Git</li>
                    <li className="techs__list-text">Express.js</li>
                    <li className="techs__list-text">mongoDB</li>
                </ul>
            </div>
        </div>
    )
}

export default Techs;