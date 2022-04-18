import React from 'react';
import './Footer.css'

function Footer() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <>
            <footer className="footer">
                <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__row">
                    <p className="footer__copyright">&copy;{year}</p>
                    <nav className="footer__links">
                        <a href="https://practicum.yandex.ru" target="_blank" className="footer__link">Яндекс.Практикум</a>
                        <a href="https://github.com" target="_blank" className="footer__link">Github</a>
                        <a href=" https://ru-ru.facebook.com" target="_blank" className="footer__link">Facebook</a>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Footer;