import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name); 
    const [email, setEmail] = React.useState(currentUser.email); 
    const activeInfoClassName = `profile__info${props.infoTooltipOpen ? '_active' : ''}`
  
    function handleChangeName(e) { 
      setName(e.target.value); 
    } 

    function handleChangeEmail(e) { 
      setEmail(e.target.value); 
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
                <h6 className="profile__header">Привет, {name}</h6>
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
                {!props.onInfoTooltip && (<p className={activeInfoClassName}>Что-то пошло не так! Попробуйте ещё раз.</p>)}
                <div className="profile__button">
                    <button className='profile__edit' onClick={handleSubmit}>Редактировать</button>
                    <button className='profile__exit' onClick={props.onLogout}>Выйти из аккаунта</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;