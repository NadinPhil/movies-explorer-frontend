import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoreMoviesCard from '../MoreMoviesCard/MoreMoviesCard';

const MoviesCardList = (props) => {

    const classError = `movies-cards__error${props.error ? '_active' : ''}`
    
    return (
        <section className="movies-cards">
            <Preloader load={props.load} />
            <p className={classError}>Ничего не найдено</p>
            <ul className="movies-list">
                {props.cards.slice(0, props.limit).map(movie => {
                        return (
                            <MoviesCard
                                key={movie.id}
                                movieName={movie.nameRU}
                                movieLink={movie.image.url}
                                movieTime={movie.duration}
                                movie={movie}
                                movieVideo={movie.trailerLink}
                                onLikedClick={props.onLikedClick}
                                liked={props.liked}
                                location={props.location}
                                onDeleteClick={props.onDeleteClick}
                            />
                        )
                    })}
            </ul>
            <MoreMoviesCard location={props.location} loadMore={props.loadMore} onClick={props.onClick} />
        </section>
    )
};

export default MoviesCardList;