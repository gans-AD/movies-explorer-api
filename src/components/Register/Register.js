import "./Register.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";

function Register(props) {
  const location = useLocation();

  return (
    <section className="sign sign_up">
      <Logo />
      <h2 className="sign__title">
        {location.pathname === "/signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h2>
      <form name="signup" className="form form_sign">
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            name="name"
            type="text"
            className="form__input"
            required
          ></input>
          <span className="form__input-error"></span>
        </div>
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            name="email"
            type="email"
            className="form__input form__input_email"
            required
          ></input>
          <span className="form__input-error">kl;j;l</span>
        </div>
        <div className="form__field">
          <label className="form__label">Пароль</label>
          <input
            name="password"
            type="password"
            className="form__input"
            required
          ></input>
          <span className="form__input-error"></span>
          <button type="submit" className="form__btn form__btn_signup">
            Зарегистрироваться
          </button>
          <span className="form__assistant">
            Уже зарегистрированы?
            <Link to="/signin" className="form__assistant form__assistant_link">
              {" "}
              Войти
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Register;
