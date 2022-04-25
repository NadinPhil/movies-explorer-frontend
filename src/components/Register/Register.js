import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { Link } from "react-router-dom";

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле Имя не может быть пустым!');
    const [emailError, setEmailError] = useState('Поле Email не может быть пустым!');
    const [passwordError, setPasswordError] = useState('Поле Пароль не может быть пустым!');
    const [isValid, setIsValid] = useState(false);
    const activeButtonClassName = `register__link${isValid ? '_active' : ''}`

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [nameError, emailError, passwordError])

    //const [values, setValues] = useState({ name: "", email: "", password: "" });

    /* const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }; */

    const handleChangeName = (e) => {
        setName(e.target.value);
        const reg = /^[a-zа-яё -]+$/i;
        //const reg = /^[а-яА-ЯёЁa-zA-Z_-]$/i;
        if (!reg.test(String(e.target.value))) {
            setNameError('Некорректное имя')
        } else {
            setNameError('')
        }
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister({ name: name, password: password, email: email });
    };

    const handleBlur = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true)
                break
            case "email":
                setEmailDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        }
    }


    return (
        <section className="register">
            <div className="register__container">
                <Link to="/"><img src={logo} alt="Логотип" className="register__logo" /></Link>
                <p className="register__welcome">Добро пожаловать!</p>
                <form className="register__form" onSubmit={handleSubmit}>
                    <span className="register__text">Имя</span>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="register__input"
                        value={name}
                        onChange={e => handleChangeName(e)}
                        required
                        onBlur={e => handleBlur(e)}
                    />
                    {(nameDirty && nameError) && <div className='error'>{nameError}</div>}
                    <span className="register__text">Email</span>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="register__input"
                        value={email}
                        onChange={e => handleChangeEmail(e)}
                        required
                        onBlur={e => handleBlur(e)}
                    />
                    {(emailDirty && emailError) && <div className='error'>{emailError}</div>}
                    <span className="register__text">Пароль</span>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="register__input"
                        value={password}
                        onChange={e => handleChangePassword(e)}
                        required
                        onBlur={e => handleBlur(e)}
                    />
                    {(passwordDirty && passwordError) && <div className='error'>{passwordError}</div>}
                    <div className="register__button-container">
                        <button
                            type="submit"
                            className={activeButtonClassName}
                            onSubmit={handleSubmit}
                            disabled={!isValid}
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