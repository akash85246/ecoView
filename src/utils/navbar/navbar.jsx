import { useState } from "react";
import appLogo from "../../assets/appLogo.svg";
import profilePhoto from "../../assets/defaultPhoto.jpg";
import hamburger from "../../assets/hamIcon.svg";
import close from "../../assets/close.svg";
import Photo from "../profilePhoto/photo";
import "./navbar.css";

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : "close"}`}>
      <img src={appLogo} alt="App Logo" className="appLogo" />
      <button className="menuButton" onClick={toggleMenu}>
        {!isMenuOpen ? <img src={hamburger}></img> : <img src={close}></img>}
      </button>
      <section className={`navLinks ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/my-files">My Files</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div className="sign">
          <button className="signUp">Sign Up</button>
          <button className="logIn">Login</button>
        </div>
        <div>
          <Photo photo={profilePhoto} />
        </div>
      </section>
    </nav>
  );
}
