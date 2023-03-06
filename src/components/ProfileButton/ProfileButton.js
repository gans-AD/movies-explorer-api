import "./ProfileButton.css";

function ProfileButton(props) {
  return (
    <button type="button" className="profile-btn" onClick={props.onClick}>
      Аккаунт
    </button>
  );
}

export default ProfileButton;
