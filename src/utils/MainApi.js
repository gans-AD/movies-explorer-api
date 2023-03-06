import { baseUrlCinematronAuth } from "./constants";

class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.header;
  }

  _requestHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
