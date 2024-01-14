import appLogo from "../../assets/appLogo.svg";
import profilePhoto from "../../assets/defaultPhoto.jpg";
import Photo from "../profilePhoto/photo";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={appLogo} alt="App Logo" className="appLogo" />
      <section>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/my-files">My Files</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div>
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
