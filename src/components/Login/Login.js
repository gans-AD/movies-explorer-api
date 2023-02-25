import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Login(props) {

  return (
    <section className="sign sign_in">
      <Logo />
      <h2 className="sign__title">Рады видеть!</h2>
      <form name="signup" className="form form_sign">
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            name="email"
            type="email"
            className="form__input form__input_email"
            required
          ></input>
          <span className="form__input-error"></span>
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
        </div>

        <button type="submit" className="form__btn form__btn_signin">
          Войти
        </button>
        <span className="form__assistant">
          Ещё не зарегистрированы?
          <Link to="/signup" className="form__assistant form__assistant_link">
            {" "}
            Регистрация
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Login;
