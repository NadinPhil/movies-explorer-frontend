import React from 'react'
import { initialMovies } from '../../../utils/array'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from "react";

const MoviesCardList = (props) => {

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }
   
    return (
        <section className="movies-cards">
            <ul className="movies-list">
                {size > 880 &&
                    (props.cards.slice(0, 12).map(movie => {
                        return (
                            <MoviesCard
                                key={movie.id}
                                movieName={movie.nameRU}
                                movieLink={movie.image.url}
                                movieTime={movie.duration}
                                movie={movie}
                                movieVideo={movie.trailerLink}
                            />
                        )
                    }))}

                {size > 600 && size <= 880 && (
                    props.cards.slice(0, 8).map(movie => {
                        return (
                            <MoviesCard
                            key={movie.id}
                            movieName={movie.nameRU}
                            movieLink={movie.image.url}
                            movieTime={movie.duration}
                            movie={movie}
                            />
                        )
                    })
                )}
                {size <= 600 && (
                    props.cards.slice(0, 5).map(movie => {
                        return (
                            <MoviesCard
                            key={movie.id}
                            movieName={movie.nameRU}
                            movieLink={movie.image.url}
                            movieTime={movie.duration}
                            movie={movie}
                            />
                        )
                    })
                )}
            </ul>
            
        </section>
    )
};

export default MoviesCardList;