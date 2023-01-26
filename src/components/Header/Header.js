import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <button
        type="button"
        className={`header__reg-button ${location.pathname === "/movies" ? "header__reg-button_hidden" : null}`}
      >
        Регистрация
      </button>
      <button type="button" className="header__login-button">
        Войти
      </button>
    </header>
  );
}

export default Header;
