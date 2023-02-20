import { baseUrlBeatFilmMovies } from "./constants";

class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _requestHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //запрос на сервер BeatfilmMoviesApi
  search() {
    return fetch(this._url, {
      headers: this._headers,
    }).then(this._requestHandler);
  }
}

//API сервера поиска фильмов
const moviesApi = new MoviesApi({
  baseUrl: baseUrlBeatFilmMovies,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
