import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/saved-movies" element={<SavedMovies />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/sign-up" element={<Register />} />
          <Route exact path="/sign-in" element={<Login />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
