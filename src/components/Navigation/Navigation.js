import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  // переменные для определения текущего роута
  const mainPath = location.pathname === "/";
  const moviesPath = location.pathname === "/movies";
  const savedMoviesPath = location.pathname === "/saved-movies";

  return (
    <section className="navigation">
      <Link
        to="/"
        className={`navigation__link ${
          mainPath ? "navigation__link_active" : ""
        }`}
      >
        Главная
      </Link>

      <Link
        to="/movies"
        className={`navigation__link ${
          moviesPath ? "navigation__link_active" : ""
        }`}
      >
        Фильмы
      </Link>
      <Link
        to="/saved-movies"
        className={`navigation__link ${
          savedMoviesPath ? "navigation__link_active" : ""
        }`}
      >
        Сохраненные фильмы
      </Link>
    </section>
  );
}

export default Navigation;
