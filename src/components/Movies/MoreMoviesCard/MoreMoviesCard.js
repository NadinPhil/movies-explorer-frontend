import React from 'react'
import './MoreMoviesCard.css'


const MoreMoviesCard = (props) => {
    return (
        <>
        { props.location === "/movies" && (
        <section className="more-movies">
            <button className="more-movies__button">Еще</button>
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