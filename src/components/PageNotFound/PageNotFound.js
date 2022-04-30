import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound(props) {
    return (
        <>
            <section className="error">
                <p className="error__number">404</p>
                <p className="error__text">Страница не найдена</p>
                {props.loggedIn 
                ? (<Link to="/movies" className="error__link">Назад</Link>)
                :(<Link to="/" className="error__link">Назад</Link>)
                }
            </section>
        </>
    );
}
export default PageNotFound; 