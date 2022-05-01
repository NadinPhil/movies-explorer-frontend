import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    return (
        <>
            <section className="movies">
                <SearchForm
                    form={props.form}
                    checkbox={props.checkbox}
                    onChange={props.onChange}
                    onInputClick={props.onInputClick}
                    onSubmit={props.onSubmit}
                    errorInput={props.errorInput}
                />
                <MoviesCardList
                    location={"/saved-movies"}
                    cards={props.cards}
                    error={props.error}
                    limit={props.limit}
                    onDeleteClick={props.onDeleteClick}
                    load={props.load}
                />
                <Footer />
            </section>
        </>
    );
}

export default SavedMovies; 