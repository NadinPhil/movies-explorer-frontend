import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
    return (
        <section className="profile">
            <Header location={"/profile"}/>
            <div className="profile__container">
                <h6 className="profile__header">Привет, Надежда!</h6>
                <div className="profile__form">
                    <div className="profile__input">
                        <span className="profile__placeholder">Имя</span>
                        <input className="profile__text" />
                    </div>
                    <div className="profile__input">
                        <span className="profile__placeholder">E-mail</span>
                        <input className="profile__text" />
                    </div>
                </div>
                <div className="profile__button">
                    <button className='profile__edit'>Редактировать</button>
                    <button className='profile__exit'>Выйти из аккаунта</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;