import React from 'react';
import Header from '../../Header/Header';
import './SearchForm.css';

function SearchForm() {
    return (

        <div className="form">
            <Header location={"/movies"} />
            <div className="form__container">
                <input className="form__input" placeholder='Фильм' required />
                <button className='form__button'>Найти</button>
                <label className="checkbox">
                    <input type="checkbox" className="checkbox-input"  />
                    <span className="checkbox-switch"></span>
                    <span className="checkbox-text">Короткометражки</span>
                </label>
            </div>
        </div>
    )
}

export default SearchForm;
