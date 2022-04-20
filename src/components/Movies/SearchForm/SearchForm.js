import React from 'react';
import Header from '../../Header/Header';
import './SearchForm.css';

function SearchForm(props) {
    
    const сheckedInputClassName = `checkbox-input checkbox-input${props.checkbox ? '_checked' : ''}`
    return (
        <div className="form">
            <Header location={"/movies"} />
            <div className="form__container"  >
                <form onSubmit={props.onSubmit}>
                <input onChange={props.onChange} value={props.form} className="form__input" placeholder='Фильм' name="film" type="text" id="film" required/>
                <span id="film-error" className="error">{props.error}</span>
                <button className='form__button' >Найти</button>
                </form>
                <label className="checkbox">
                    <input type="checkbox" onClick={props.onInputClick} className={сheckedInputClassName} />
                    <span className="checkbox-switch"></span>
                    <span className="checkbox-text">Короткометражки</span>
                </label>
            </div>
        </div>
    )
}

export default SearchForm;
