import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name); 
    const [email, setEmail] = React.useState(currentUser.email); 
    const [button, setButton] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const activeInfoClassName = `profile__info${props.infoTooltipOpen ? '_active' : ''}`
    const activeButtonClassName = `profile__edit${button ? '_active' : ''}`
  
    function handleChangeName(e) { 
      setName(e.target.value);
      if (e.target.value === currentUser.name) {
        setButton(false);
        setDisabled(true);
      } else {
        setDisabled(false);
        setButton(true);
      } 
    } 

    function handleChangeEmail(e) { 
      setEmail(e.target.value); 
      if (e.target.value === currentUser.email) {
        setButton(false);
        setDisabled(true);
      } else {
        setDisabled(false);
        setButton(true);
      } 
    } 
  
    function handleSubmit(e) { 
      e.preventDefault();
      props.onEditProfile({ 
        name: name, 
        email: email, 
      }); 
    } 
  
    React.useEffect(() => { 
      setName(currentUser.name); 
      setEmail(currentUser.email);
    }, [currentUser]); 

    return (
        <section className="profile">
            <Header location={"/profile"}/>
            <div className="profile__container">
                <h6 className="profile__header">Привет, {currentUser.name}</h6>
                <div className="profile__form">
                    <div className="profile__input">
                        <span className="profile__placeholder">Имя</span>
                        <input className="profile__text" value={`${name}`} onChange={handleChangeName}/>
                    </div>
                    <div className="profile__input">
                        <span className="profile__placeholder">E-mail</span>
                        <input className="profile__text" value={`${email}`} onChange={handleChangeEmail} />
                    </div>
                </div>
                {props.onInfoTooltip
                        ? (
                            <p className={activeInfoClassName}>Вы успешно изменили данные профиля!</p>
                        )
                        : (
                            <p className={activeInfoClassName}>Что-то пошло не так! Попробуйте ещё раз.</p>
                        )}
                <div className="profile__button">
                    <button disabled={disabled} className={activeButtonClassName} onClick={handleSubmit}>Редактировать</button>
                    <button className='profile__exit' onClick={props.onLogout}>Выйти из аккаунта</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;