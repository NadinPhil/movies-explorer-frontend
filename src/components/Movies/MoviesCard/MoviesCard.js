import React from 'react'
import './MoviesCard.css'
//import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

const MoviesCard = (props) => {

    //const currentUser = React.useContext(CurrentUserContext);
    //const [liked, setLiked] = React.useState(false);

    function handleLikeClick() {
        props.onLikedClick(props.movie.id);
        //setLiked((prev) => !prev)
    }
    function handleDeleteClick() {
        props.onDeleteClick(props.movie.id);
        //setLiked((prev) => !prev)
    }

    const liked = props.movie.liked;
    const cardLikeButtonClassName = `elements-grid__flag${liked ? '_active' : ''}`
    return (
        <section className="card">
            <li className="elements-grid__item">
                <div className="elements-grid__text">
                    <h5 className="elements-grid__title">{props.movieName}</h5>
                    <span className="elements-grid__time">{props.movieTime}</span>
                </div>
                {(props.location === "/movies") && (
                    <>
                        <button aria-label="Флаг" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <div className="elements-grid__img-container">
                            <a href={props.movieVideo} target="_blank"><img className="elements-grid__image" src={`https://api.nomoreparties.co${props.movieLink}`} alt={props.movieName} /></a>
                        </div>
                    </>)}
                {(props.location === "/saved-movies") && (
                    <>
                        <button aria-label="Флаг" type="button" className="elements-grid__flag_delete" onClick={handleDeleteClick}></button>
                        <div className="elements-grid__img-container">
                            <a href={props.movieVideo} target="_blank"><img className="elements-grid__image" src={props.movieImg} alt={props.movieName} /></a>
                        </div>
                    </>
                )}

            </li>
        </section>
    )
};

export default MoviesCard;