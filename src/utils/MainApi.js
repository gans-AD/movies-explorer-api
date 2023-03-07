import { baseUrlCinematronAuth } from "./constants";

class MainApi {
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

  // запрос регистрации пользователя
  register(data) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._requestHandler);
  }

  // запрос на аутентификацию
  authorize(data) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._requestHandler);
  }

  // выход из приложения
  signOut() {
    return fetch(`${this._url}/signout`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._requestHandler);
  }

  // проверка валидности токена
  tokenCheck() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._requestHandler);
  }
}

//---------------------------------------------------------------------
// Авторизация на сервере
const auth = new MainApi({
  baseUrl: baseUrlCinematronAuth,
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
