import React from 'react'
import './MoreMoviesCard.css'


const MoreMoviesCard = (props) => {
    const moreMovies = `more-movies${props.loadMore ? '_active' : ''}`
    return (
        <>
        { props.location === "/movies" && (
        <section className={moreMovies}>
            <button className="more-movies__button" onClick={props.onClick}>Еще</button>
        </section>
        )
        }
        { props.location === "/saved-movies" && (
        <section className="more-movies">
         <div className="more-movies__container"></div>
        </section>
        )
        }
        </>
    )
};

export default MoreMoviesCard;