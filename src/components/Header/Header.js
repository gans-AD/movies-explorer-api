import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <button type="button" className="header__reg-button">Регистрация</button>
      <button type="button" className="header__login-button">Войти</button>
    </header>
  );
}

export default Header;
