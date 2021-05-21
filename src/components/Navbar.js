import React from "react";
import Logo from "../images/netflix-logo.png";
import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, [scroll]);

  return (
    <div className={`nav ${scroll && "nav__black"}`}>
      <div className="nav__contents">
        <img src={Logo} alt="logo" className="nav__logo" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
