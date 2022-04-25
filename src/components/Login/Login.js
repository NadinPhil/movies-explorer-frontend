import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле Email не может быть пустым!');
    const [passwordError, setPasswordError] = useState('Поле Пароль не может быть пустым!');
    const [isValid, setIsValid] = useState(false);
    const activeButtonClassName = `login__link${isValid ? '_active' : ''}`

    useEffect(() => {
        if (emailError || passwordError) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [emailError, passwordError])

    const handleBlur = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        if (!e.target.value) {
            setPasswordError('Поле Пароль не может быть пустым!')
        } else {
            setPasswordError('')
        }
    };
    /* const [values, setValues] = useState({ email: "", password: "", });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }; */

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        props.onLogin({ password: password, email: email });
    };

    return (
        <section className="login">
            <div className="login__container">
                <Link to="/"><img src={logo} alt="Логотип" className="login__logo" /></Link>
                <p className="login__welcome">Рады видеть!</p>
                <form className="login__form" onSubmit={handleSubmit}>
                    <span className="login__text">Email</span>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="login__input"
                        value={email}
                        onChange={handleChangeEmail}
                        required
                        onBlur={handleBlur}
                    />
                    {(emailDirty && emailError) && <div className='error'>{emailError}</div>}
                    <span className="login__text">Пароль</span>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="login__input"
                        value={password}
                        onChange={handleChangePassword}
                        required
                        onBlur={handleBlur}
                    />
                    {(passwordDirty && passwordError) && <div className='error'>{passwordError}</div>}

                    <div className="login__button-container">
                        <button
                            type="submit"
                            className={activeButtonClassName}
                            onSubmit={handleSubmit}

                        >
                            Войти
                        </button>
                    </div>
                </form>
                <div className="login__signup">
                    <p>Еще не зарегистрированы? <Link to="/sign-up" className="login__login-link"> Регистрация</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login;