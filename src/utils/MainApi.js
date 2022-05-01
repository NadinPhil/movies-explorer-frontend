class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;

    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('Сервер не доступен')

    }

    //регистрация
    register = (name, email, password) => {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkResponse)
            .then((res) => res)
    };


    //авторизация 
    authorize = (email, password) => {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    };

    //проверка токена
    checkToken = (token) => {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
            .then(data => data)
    }

    //получение данных пользователя 
    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
    }

    //редактирования профиля 
    editUserInfo(user, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email
            })
        })
            .then(this._checkResponse)
    }

    //добавление фильма
    addMovie(movies, token) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                country: movies.country,
                director: movies.director,
                duration: movies.duration,
                year: movies.year,
                description: movies.description,
                image: `https://api.nomoreparties.co${movies.image.url}`,
                trailerLink: movies.trailerLink,
                nameRU: movies.nameRU,
                nameEN: movies.nameEN,
                thumbnail: movies.thumbnail,
                id: movies.id,
                liked: movies.liked,
            }),
        })
            .then(this._checkResponse)
    }

    //удаление фильма  
    removeMovie(_id, token) {
        return fetch(`${this._url}/movies/${_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._checkResponse)
    }

    //получение списка сохраненных фильмов в виде массива 
    getAllSavedMovies(token) {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._checkResponse)
    }

}

const api = new Api({
    url: 'https://api.films.nomoredomains.xyz',
    //url: 'http://localhost:3000',
    headers: {
        "content-type": "application/json",
    }

});

export default api; 