import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({email, password});
  }

  return (
    <main className="signin">
      <Logo />
      <h2 className="signin__title">Рады видеть!</h2>
      <form name="signin" className="form form_sign" onSubmit={handleSubmit} >
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            name="email"
            type="email"
            className="form__input form__input_email"
            value={email || ""}
            onChange={handleChangeEmail}
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
            value={password || ""}
            onChange={handleChangePassword}
            required
          ></input>
          <span className="form__input-error"></span>
        </div>

        <button type="submit" className="form__btn form__btn_signin" >
          Войти
        </button>
        <span className="form__assistant">
          Ещё не зарегистрированы?
          <Link to="/signup" className="form__assistant-link">
            {" "}
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Login;
