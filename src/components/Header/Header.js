import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const showRegBtn = !(
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile"
  );

  const showLink = !(location.pathname === "/");
  const showProfileBtn = !(location.pathname === "/");

  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <div className="header__link-container">
        {showLink && (
          <>
            <Link to="/movies" className="header__link header__link_movies">
              Фильмы
            </Link>
            <Link
              to="/movies"
              className="header__link header__link_saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </>
        )}
      </div>
      <div>
        {showRegBtn && (
          <>
            <button type="button" className="header__reg-btn">
              Регистрация
            </button>

            <button type="button" className="header__login-btn">
              Войти
            </button>
          </>
        )}
      </div>
      {showProfileBtn && (<button type="button" className="header__profile-btn">
        Аккаунт
      </button>)}
    </header>
  );
}

export default Header;
