import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <button type="button" className="header__reg-button"></button>
      <button type="button" className="header__login-button"></button>
    </header>
  );
}

export default Header;
