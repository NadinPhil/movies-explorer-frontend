import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <>
            <section className="error">
                <p className="error__number">404</p>
                <p className="error__text">Страница не найдена</p>
                <Link to="/" className="error__link">Назад</Link>
            </section>
        </>
    );
}
export default PageNotFound; 