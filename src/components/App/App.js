import React, { useEffect, useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import apiMovies from '../../utils/MoviesApi.js';
import api from '../../utils/MainApi.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [form, setForm] = React.useState('');
  const [error, setError] = React.useState(false);
  const [errorInput, setInputError] = React.useState('');
  const [errorInputSaved, setInputErrorSaved] = React.useState('');
  const [checked, setСhecked] = React.useState(false);
  const [shortMovie, setShortMovie] = React.useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const size = useWindowSize();
  const [limit, setLimit] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  const [savedCards, setSavedCards] = useState([]);
  const [shortSavedMovie, setShortSavedMovie] = React.useState([]);
  const [formSaved, setFormSaved] = React.useState('');
  const [checkedSaved, setСheckedSaved] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [infoTooltip, setInfoTooltip] = React.useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  
  window.onload = function () {
    setLoad(true)
  }

  useEffect(() => {
    handleTokenCheck('/movies');
  }, []);

  // проверяем токен пользователя 
  function handleTokenCheck(path) {
    if (!loggedIn && localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      api.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(path);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // вход по логину 
  const handleLogin = (data) => {
    console.log(data)
    api
      .authorize(data.email, data.password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          navigate("/movies");
          handleGetAllMovies();
        } else {
          setInfoTooltipOpen(true);
          setInfoTooltip(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltipOpen(true);
        setInfoTooltip(false);
      });
  };

  // вход по регистрации 
  const handleRegister = (data) => {
    api
      .register(data.name, data.email, data.password)
      .then((res) => {
        if (res) {
          setInfoTooltipOpen(true);
          setInfoTooltip(true);
          handleLogin(data);
          setInfoTooltip(true);
        } else {
          console.log("Ошибка регистрации!");
          setInfoTooltipOpen(true);
          setInfoTooltip(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltipOpen(true);
        setInfoTooltip(false);
      });
  };

  //удаляем пользователя при нажатии на выход, переводим на главную 
  const handleLogout = (evt) => {
    evt.preventDefault();
    localStorage.removeItem('jwt');
    localStorage.removeItem('status');
    localStorage.removeItem('statusSaved');
    localStorage.removeItem('liked');
    localStorage.removeItem('cards');
    setCards([]);
    setForm('');
    setСhecked(false);
    setSavedCards([]);
    setLoggedIn(false);
    setFormSaved('');
    setСheckedSaved(false);
    navigate('/')
  }

  //редактирование профиля
  function handleUpdateUser(data) {
    api.editUserInfo(data, jwt)
      .then((dataUser) => {
        if (dataUser) {
          setInfoTooltipOpen(false);
          setCurrentUser(dataUser);
        } else {
          setInfoTooltipOpen(true);
          setInfoTooltip(false);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setInfoTooltipOpen(true);
        setInfoTooltip(false);
      })
  }

  //отслеживаем размер экрана 
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
        if (window.innerWidth > 880) {
          setLimit(12)
        } else {
          if (window.innerWidth > 600 && window.innerWidth <= 880) {
            setLimit(8)
          } else setLimit(5)
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  //загружаем больше карточек
  function addMoreMovies() {
    if (limit <= cards.length) {
      if (size > 880) {
        setLimit((prevLimit) => prevLimit + 3);
        setLoadMore(false);
      } else {
        setLimit((prevLimit) => prevLimit + 2);
        setLoadMore(false);
      }
    } else {
      setLoadMore(true);
    }
  }

  //меняем форму 
  const handleChange = (event) => {
    setForm(event.target.value);
    if (!event.target.value) {
      setInputError('Нужно ввести ключевое слово')
    } else {
      setInputError('')
    }
  };

  //получаем все карточки
  function handleGetAllMovies() {
    apiMovies.getAllMovies()
      .then((cards) => {
        localStorage.setItem('cards', JSON.stringify(cards.map((cards) => {
          return {
            country: cards.country,
            description: cards.description,
            director: cards.director,
            duration: cards.duration,
            id: cards.id,
            image: cards.image,
            nameEN: cards.nameEN,
            nameRU: cards.nameRU,
            trailerLink: cards.trailerLink,
            year: cards.year,
            liked: false
          }
        })
        ))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //сабмит формы поиска
  function handleSubmit(event) {
    event.preventDefault();
    const movies = JSON.parse(localStorage.getItem('cards'))
    const moviesFilter = movies.filter(card => card.nameRU.indexOf(form) !== -1)
    setCards(moviesFilter)
    localStorage.setItem('liked', JSON.stringify(moviesFilter));
    localStorage.setItem('status', JSON.stringify({
      'movies': moviesFilter,
      'checked': checked,
      'form': form
    }))
    if (moviesFilter.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    if (moviesFilter.length <= limit) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  };

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('status'));
    if (data === null) {
      setCards([])
      setСhecked(false)
      setForm('')
    } else {
      setCards(data.movies)
      setСhecked(data.checked)
      setForm(data.form)
      const likedCard = JSON.parse(localStorage.getItem('liked'));
      if (likedCard === null) {
        setCards(data.movies);
      } else setCards(likedCard);
    }
  }, []);

  React.useEffect(() => {
    setShortMovie(cards.filter(card => card.duration <= 40))
  }, [cards, setСhecked]);

  function handleСheckedClick() {
    setСhecked((prev) => !prev)
  }

  //меняем форму сохраненных фильмов
  const handleChangeSaved = (event) => {
    setFormSaved(event.target.value);
    if (!event.target.value) {
      setInputErrorSaved('Нужно ввести ключевое слово')
    } else {
      setInputError('')
    };
  }

  //сабмит формы поиска сoхраненных фильмов
  function handleSubmitSavedMovies(event) {
    event.preventDefault();
    const moviesFilter = savedCards.filter(card => card.nameRU.indexOf(formSaved) !== -1)
    setSavedCards(moviesFilter)
    localStorage.setItem('statusSaved', JSON.stringify({
      'movies': moviesFilter,
      'checked': checkedSaved,
      'form': formSaved
    }))
    if (moviesFilter.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('statusSaved'));
    if (data === null) {
      setSavedCards([])
      setСheckedSaved(false)
      setFormSaved('')
    } else {
      setSavedCards(data.movies)
      setСheckedSaved(data.checked)
      setFormSaved(data.form)
    }
  }, []);

  React.useEffect(() => {
    setShortSavedMovie(savedCards.filter(card => card.duration <= 40))
  }, [savedCards, setСheckedSaved]);

  function handleСheckedClickSaved() {
    setСheckedSaved((prev) => !prev)
  }

  // лайк/дизлайк + удаление/добавление фильма
  function handleAddMovie(id) {
    const movies = JSON.parse(localStorage.getItem('cards'))
    const cardLiked = cards.find((card) => card.id === id)
    if (cardLiked.liked === true) {
      setCards(
        cards.map((card) =>
          card.id === id ? { ...card, liked: false } : card,
        )
      )
      localStorage.setItem('liked', JSON.stringify(cards.map((card) =>
        card.id === id ? { ...card, liked: false } : card,
      )));
      localStorage.setItem('cards', JSON.stringify(movies.map((card) =>
        card.id === id ? { ...card, liked: false } : card,
      )));
      const savedMoviesFilter = savedCards.find(card => card.id === id)
      api.removeMovie(savedMoviesFilter._id, jwt)
        .then(() => {
          setSavedCards((state) => state.filter((c) => c._id !== savedMoviesFilter._id));
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
    } else {
      setCards(
        cards.map((card) =>
          card.id === id ? { ...card, liked: true } : card
        )
      );
      localStorage.setItem('liked', JSON.stringify(cards.map((card) =>
        card.id === id ? { ...card, liked: true } : card,
      )));
      localStorage.setItem('cards', JSON.stringify(movies.map((card) =>
        card.id === id ? { ...card, liked: true } : card,
      )));

      api.addMovie(cardLiked, jwt)
        .then((newCard) => {
          setSavedCards([newCard, ...savedCards]);
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
    }
  }

  // удаление сохраненного фильма
  function handleDeleteMovie(id) {
    const movies = JSON.parse(localStorage.getItem('cards'))
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, liked: false } : card
      )
    )
    localStorage.setItem('liked', JSON.stringify(cards.map((card) =>
      card.id === id ? { ...card, liked: false } : card,
    )));
    localStorage.setItem('cards', JSON.stringify(movies.map((card) =>
      card.id === id ? { ...card, liked: false } : card,
    )));
    const savedMoviesFilter = savedCards.find(card => card.id === id)
    api.removeMovie(savedMoviesFilter._id, jwt)
      .then(() => {
        setSavedCards((state) => state.filter((c) => c._id !== savedMoviesFilter._id));
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
  }

  function handleLikedCards([user, cards]) {
    const movies = JSON.parse(localStorage.getItem('cards'))
          localStorage.setItem('cards', JSON.stringify(movies.map((movie) => {
            if (cards.filter(card => card.owner === user._id).find((saved) => movie.id === saved.id)) {
              return { ...movie, liked: true }
            } else return movie
          }
          )));
    }
  
  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([
        api.getUserInfo(jwt),
        api.getAllSavedMovies(jwt)
      ])
        .then(([user, cards]) => {
          console.log(user);
          setCurrentUser(user);
          setSavedCards(cards.filter(card => card.owner === user._id));
          handleLikedCards([user, cards]);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn])
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App__container">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/movies" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  onChange={handleChange}
                  error={error}
                  form={form}
                  cards={checked ? shortMovie : cards}
                  onSubmit={handleSubmit}
                  checkbox={checked}
                  onInputClick={handleСheckedClick}
                  loadMore={loadMore}
                  onClick={addMoreMovies}
                  limit={limit}
                  onLikedClick={handleAddMovie}
                  load={load}
                  errorInput={errorInput}

                />
              </ProtectedRoute>}
            />
            <Route exact path="/saved-movies" element={
              <SavedMovies
                cards={checkedSaved ? shortSavedMovie : savedCards}
                limit={limit}
                error={error}
                form={formSaved}
                checkbox={checkedSaved}
                onChange={handleChangeSaved}
                onInputClick={handleСheckedClickSaved}
                onSubmit={handleSubmitSavedMovies}
                onDeleteClick={handleDeleteMovie}
                load={load}
                errorInput={errorInputSaved}
              />}
            />
            <Route exact path="/profile" element={<Profile onLogout={handleLogout} onEditProfile={handleUpdateUser} onInfoTooltip={infoTooltip} infoTooltipOpen={infoTooltipOpen} />} />
            <Route exact path="/sign-up" element={<Register onRegister={handleRegister} onInfoTooltip={infoTooltip} infoTooltipOpen={infoTooltipOpen} />} />
            <Route exact path="/sign-in" element={<Login onLogin={handleLogin} onInfoTooltip={infoTooltip} infoTooltipOpen={infoTooltipOpen} />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;