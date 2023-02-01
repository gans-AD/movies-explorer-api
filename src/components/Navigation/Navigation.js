import { Link, useLocation } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./Navigation.css";

function Navigation(props) {
  const location = useLocation();

  // переменные для определения текущего роута
  const mainPath = location.pathname === "/";
  const moviesPath = location.pathname === "/movies";
  const savedMoviesPath = location.pathname === "/saved-movies";

  return (
    <section className={`navigation ${props.isOpen ? "navigation_open" : ""}`}>
      <div
        className={`navigation__menu ${
          props.isOpen ? "navigation__menu_open" : ""
        }`}
      >
        <button
          type="button"
          className="navigation__close-btn"
          onClick={props.onClose}
        ></button>

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

        <ProfileButton onClick={props.onProfileBtn} />
      </div>
    </section>
  );
}

export default Navigation;
