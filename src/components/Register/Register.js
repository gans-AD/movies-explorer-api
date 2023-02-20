import "./Register.css";

function Register(props) {
  const location = useLocation();

  return (
    <section className="sign sign_up">
      <h2 className="sign__title">
        {location.pathname === "/signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h2>
      <form name="sign" className="form-sign"></form>
    </section>
  );
}

export default Register;
