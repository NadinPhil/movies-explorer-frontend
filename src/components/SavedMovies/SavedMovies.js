import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import MoreMoviesCard from '../Movies/MoreMoviesCard/MoreMoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <section className="movies">
                <SearchForm />
                <MoviesCardList />
                <MoreMoviesCard location={"/saved-movies" } />
                <Footer />
            </section>
        </>
    );
}

export default SavedMovies; 