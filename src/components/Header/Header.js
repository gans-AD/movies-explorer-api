import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <button type="button" className="header__reg-button">Регистрация</button>
      <button type="button" className="header__login-button">Войти</button>
    </header>
  );
}

export default Header;
