import React from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { Link } from "react-router-dom";

function Register() {
    return (
        <section className="register">
            <div className="register__container">
                <Link to="/"><img src={logo} alt="Логотип" className="register__logo" /></Link>
                <p className="register__welcome">Добро пожаловать!</p>
                <form className="register__form">
                    <span className="register__text">Имя</span>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="register__input"
                    />
                    <span className="register__text">Email</span>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="register__input"
                    />
                    <span className="register__text">Пароль</span>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="register__input"
                    />

                    <div className="register__button-container">
                        <button
                            type="submit"
                            className="register__link"
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
                <div className="register__signup">
                    <p>Уже зарегистрированы? <Link to="/sign-in" className="register__login-link"> Войти</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Register;