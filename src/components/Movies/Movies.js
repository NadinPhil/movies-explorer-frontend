import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import './Movies.css';
import Footer from '../Footer/Footer';
import MoreMoviesCard from './MoreMoviesCard/MoreMoviesCard';

function Movies() {
    return (
        <>
            <section className="movies">
                <SearchForm />
                <MoviesCardList />
                <MoreMoviesCard location={"/movies" }/>
                <Footer />
            </section>
        </>
    );
}

export default Movies; 