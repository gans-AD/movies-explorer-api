import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import "./Header.css";

function Header(props) {
  const location = useLocation();
  const windowWidth = useWindowWidth();

  const mainPath = location.pathname === "/";
  const gadgetDisplay = windowWidth > 768;

  const showRegBtn = !(
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile"
  );

  const showLink = location.pathname !== "/" && gadgetDisplay;
  const showProfileBtn = !(location.pathname === "/");

  return (
    <header className={`header ${mainPath ? "header_main-path" : null}`}>
      <Link to="/" className="header__logo"></Link>

      {showLink && (
        <>
          <div className="header__link-container">
            <Link to="/movies" className="header__link header__link_movies">
              Фильмы
            </Link>
            <Link
              to="/movies"
              className="header__link header__link_saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </div>
        </>
      )}

      <div>
        {showRegBtn && (
          <>
            <button type="button" className="header__reg-btn" onClick={props.onRegBtn}>
              Регистрация
            </button>

            <button type="button" className="header__login-btn" onClick={props.onLoginBtn}>
              Войти
            </button>
          </>
        )}
      </div>
      {showProfileBtn && (
        gadgetDisplay ?
        (<button type="button" className="header__profile-btn">
          Аккаунт
        </button>
      ) : (
        <button type="button" className="header__menu-btn"></button>
      ))}
    </header>
  );
}

export default Header;
