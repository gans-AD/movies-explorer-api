import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Register(props) {

  return (
    <main className="signup">
      <Logo />
      <h2 className="signup__title">Добро пожаловать!</h2>
      <form name="signup" className="form form_sign">
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            name="name"
            type="text"
            minLength={2}
            maxLength={30}
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
            className="form__input"
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
      </form>
    </main>
  );
}

export default Register;
