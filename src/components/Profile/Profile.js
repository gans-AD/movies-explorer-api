import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form name="profile" className="form-profile">
        <div className="form-profile__field">
          <label className="form-profile__label">Имя</label>
          <input
            name="name"
            type="text"
            minLength={2}
            maxLength={30}
            className="form-profile__input"
            required
          ></input>
        </div>
        <div className="form-profile__field">
          <label className="form-profile__label">E-mail</label>
          <input
            name="email"
            type="email"
            className="form-profile__input"
            required
          ></input>
        </div>
        <button type="submit" className="profile__btn profile__btn_edit">
          Редактировать
        </button>
      </form>
      <button type="button" className="profile__btn profile__btn_signout">
        Выйти из аккаунта
      </button>
    </main>
  );
}

export default Profile;
