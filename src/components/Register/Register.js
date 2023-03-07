import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";


function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({name, email, password});
  }

  return (
    <main className="signup">
      <Logo />
      <h2 className="signup__title">Добро пожаловать!</h2>
      <form name="signup" className="form form_sign" onSubmit={handleSubmit}>
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            name="name"
            type="text"
            minLength={2}
            maxLength={30}
            className="form__input"
            value={name || ""}
            onChange={handleChangeName}
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

        <button type="submit" className="form__btn form__btn_signup">
          Зарегистрироваться
        </button>
        <span className="form__assistant">
          Уже зарегистрированы?
          <Link to="/login" className="form__assistant-link">
            {" "}
            Войти
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Register;
