import React from 'react';
import logo from '../../images/logo.svg';
import img from '../../images/icon-people.svg';
import './Header.css';
import { Link } from 'react-router-dom';



function Header(props) {
    const [actived, setActived] = React.useState(false);

    function handleActiveClick() {
        setActived((prev) => !prev)
    }
    const activeButtonClassName = `header__menu${actived ? '_active' : ''}`

    return (
        <>
            <header className="header">
                <div className={activeButtonClassName}>
                    <button className="header__close" onClick={handleActiveClick}></button>
                    <div className="header__sidebar">
                        <div className="header__sidebar-links">
                        <p className="header__sidebar-main">Главная</p>
                        <Link to="/movies" className="header__sidebar-movies">Фильмы</Link>
                        <Link to="/saved-movies" className="header__sidebar-saved">Сохраненные фильмы</Link>
                        </div>
                        <div className="header__sidebar-profile">
                            <Link to="/profile" ><button className="header__sidebar-button">Аккаунт</button></Link>
                            <img src={img} alt="Аккаунт" className="header__sidebar-img" />
                        </div>
                    </div>
                </div>
                {props.location === "/" && (
                    <div className="header__links">
                        <Link to="/"><img src={logo} alt="Логотип" className="header__logo" /></Link>
                        <div className="header__button">
                            <Link to="/sign-up"><button className="header__button_signup">Регистрация</button></Link>
                            <Link to="/sign-in"><button className="header__button_signin">Войти</button></Link>
                        </div>
                    </div>
                )}
                {(props.location === "/movies" || props.location === "/saved-movies" || props.location === "/profile") && (
                    <div className="header__links">
                        <Link to="/"><img src={logo} alt="Логотип" className="header__logo" /></Link>
                        <div>
                            <Link to="/movies" className="header__link-movies">Фильмы</Link>
                            <Link to="/saved-movies" className="header__link-saved">Сохраненные фильмы</Link>
                        </div>
                        <div className="header__link-profile">
                            <Link to="/profile" ><button className="header__button_profile">Аккаунт</button></Link>
                            <img src={img} alt="Аккаунт" className="header__img" />
                            <button className="header__burger" onClick={handleActiveClick}></button>
                        </div>

                    </div>

                )}

            </header>
        </>
    );
}
export default Header; 