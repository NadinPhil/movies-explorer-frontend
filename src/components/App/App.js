import React, { useEffect, useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import api from '../../utils/MoviesApi.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [form, setForm] = React.useState('');
  const [error, setError] = React.useState('');
  const [checked, setСhecked] = React.useState(false);
  const [shortMovie, setShortMovie] = React.useState([]);
  const [status, setStatus] = useState({}); 
 
  //меняем форму 
  const handleChange = (event) => {
	  setForm(event.target.value );
  };

  //получаем все карточки
  function handleGetAllMovies(){
    api.getAllMovies()
        .then((cards) => { 
           localStorage.setItem('cards', JSON.stringify(cards))
      })
        .catch((err) => {
          console.log(err);
        })
  }

  handleGetAllMovies();

  //сабмит формы поиска
  function handleSubmit(event){
    event.preventDefault();
    const movies = JSON.parse(localStorage.getItem('cards'))
    const moviesFilter = movies.filter(card => card.nameRU.indexOf(form) !== -1)
           setCards(moviesFilter)
           localStorage.setItem('status', JSON.stringify({
            'movies': moviesFilter,
            'checked': checked,
            'form': form
          }))
          setStatus(JSON.parse(localStorage.status))
          console.log(status)
  };

  React.useEffect(() => { 
    setStatus(JSON.parse(localStorage.getItem('status'))) 
  }, []);

  React.useEffect(() => {
    setShortMovie(cards.filter(card => card.duration <= 40))
  }, [cards, setСhecked]);

  function handleСheckedClick() {
    setСhecked((prev) => !prev)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App__container">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/movies" element={<Movies
              onChange={handleChange}
              error={error}
              form={form}
              cards={checked ? shortMovie : cards}
              onSubmit={handleSubmit}
              checkbox={checked}
              onInputClick={handleСheckedClick} />} />
            <Route exact path="/saved-movies" element={<SavedMovies />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/sign-up" element={<Register />} />
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
