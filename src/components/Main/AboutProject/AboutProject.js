import React from 'react';
import Caption from '../Caption/Caption';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className="project">
            <Caption name={"О проекте"} />
            <div className="project__info">
                <div className="project__paragraph">
                    <p className="project__header">Дипломный проект включал 5 этапов</p>
                    <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__paragraph">
                    <p className="project__header">На выполнение диплома ушло 5 недель</p>
                    <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__progressbar">
                <div className="project__column project__column_back">
                    <span className="project__progressbar_black">1 неделя</span>
                    <span className="project__progressbar_text">Back-end</span>
                </div>
                <div className="project__column project__column_front">
                    <span className="project__progressbar_white">4 недели</span>
                    <span className="project__progressbar_text">Front-end</span>
                </div>
            </div>

        </div>
    )
}

export default AboutProject;