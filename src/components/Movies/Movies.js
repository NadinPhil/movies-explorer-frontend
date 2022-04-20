import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import './Movies.css';
import Footer from '../Footer/Footer';
import MoreMoviesCard from './MoreMoviesCard/MoreMoviesCard';

function Movies(props) {

    return (
        <>
            <section className="movies">
                <SearchForm
                onSubmit={props.onSubmit}
                    onChange={props.onChange}
                    error={props.error}
                    form={props.form}
                    checkbox={props.checkbox}
                    onInputClick={props.onInputClick} />
                <MoviesCardList cards={props.cards} />
                <MoreMoviesCard location={"/movies"} />
                <Footer />
            </section>
        </>
    );
}

export default Movies; 