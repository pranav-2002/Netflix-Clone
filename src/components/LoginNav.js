import React from "react";
import "./LoginNav.css";
import Logo from "../images/netflix-logo.png";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <div className="login__nav">
      <div className="login__nav__main">
        <img className="login__nav__logo" src={Logo} alt="logo" />
        <Link className="login__nav__sign" to="/">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default LoginNav;
