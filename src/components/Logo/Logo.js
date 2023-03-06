import "./Logo.css";
import { Link, useLocation } from "react-router-dom";

function Logo() {
  const location = useLocation();
  const signPath =
    location.pathname === "/signin" || location.pathname === "/signup";

  return <Link to="/" className={`logo-link ${signPath ? "logo-link_sign" : " "}`}></Link>;
}

export default Logo;
