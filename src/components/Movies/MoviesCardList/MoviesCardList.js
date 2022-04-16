import React from 'react'
import { initialMovies } from '../../../utils/array'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from "react";

const MoviesCardList = () => {

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
               {size > 768 &&
               (initialMovies.slice(0,12).map(movie => {
                    return (
                        <MoviesCard
                            movieName={movie.name}
                            movieLink={movie.link.img}
                            movieTime={movie.time}
                            movie={movie}
                            movieLiked={movie.like}
                        />
                    )
                }))}
                
                { size > 600 && size <= 768 && (
                initialMovies.slice(0,8).map(movie => {
                    return (
                        <MoviesCard
                            movieName={movie.name}
                            movieLink={movie.link.img}
                            movieTime={movie.time}
                            movie={movie}
                            movieLiked={movie.like}
                        />
                    )
                })
            )}
            { size <= 600  && (
                initialMovies.slice(0,5).map(movie => {
                    return (
                        <MoviesCard
                            movieName={movie.name}
                            movieLink={movie.link.img}
                            movieTime={movie.time}
                            movie={movie}
                            movieLiked={movie.like}
                        />
                    )
                })
            )}
            </ul>
        </section>
    )
};

export default MoviesCardList;