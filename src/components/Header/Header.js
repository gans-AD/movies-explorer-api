import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import "./Header.css";
import ProfileButton from "../ProfileButton/ProfileButton";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

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
    <header className={`header ${mainPath ? "header_main-path" : ""}`}>
      <Logo />

      {showLink && (
        <>
          <div className="header__link-container">
            <Link to="/movies" className="header__link header__link_movies">
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
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
            <button
              type="button"
              className="header__reg-btn"
              onClick={props.onRegBtn}
            >
              Регистрация
            </button>

            <button
              type="button"
              className="header__login-btn"
              onClick={props.onLoginBtn}
            >
              Войти
            </button>
          </>
        )}
      </div>

      {showProfileBtn &&
        (gadgetDisplay ? (
          <ProfileButton onClick={props.onProfileBtn} />
        ) : (
          <button
            type="button"
            className="header__menu-btn"
            onClick={props.onMenuBtn}
          ></button>
        ))}

      <Navigation
        onClose={props.onCloseNav}
        isOpen={props.isOpenNav}
        onProfileBtn={props.onProfileBtn}
      />
    </header>
  );
}

export default Header;
