import React, { useState } from "react";
import appLogo from "../../../assets/appLogo.svg";
import "./signUp.css";
import design from "../../../assets/signBack.svg";
import signPhoto from "../../../assets/signPhoto.svg";
import screenPhoto from "../../../assets/signPhoto2.svg";
import googleIcon from "../../../assets/googleIcon.svg";
import emailIcon from "../../../assets/emailIcon.svg";
import passwordIcon from "../../../assets/passwordIcon.svg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
    handleEmail();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
    handlePassword();
  };

  const handleEmail = () => {
    if (!email) {
      setEmailError("Please enter your email");
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
  };
  const handlePassword = () => {
    if (!password) {
      setPasswordError("Please enter your password");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }

    // If no errors, proceed with sign up logic
    // Add your sign up logic here
  };

  const isValidEmail = (email) => {
    // Basic email validation, you can use a library like validator.js for more comprehensive validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="SignPageContainer">
      <div className="signPhotoContainer">
        <img src={signPhoto} alt="Sign Photo" />
        <img src={screenPhoto} alt="Screen Photo" className="overlay" />
      </div>

      <div className="SignPage">
        <img src={design} className="design" alt="Design" />
        <section className="SignUpContainer">
          <img src={appLogo} alt="App Logo" className="signLogo" />

          <div className="signUpHeading">
            <h1>Sign Up </h1>
            <p>Hi! Tell us more about yourself by signing up.</p>
          </div>
          <button className="googleSignInButton">
            <img src={googleIcon} alt="Google Logo" />
            <p>Continue with Google</p>
          </button>

          <div className="orContainer"></div>
          <span className="or">Or</span>

          <div className="inputContainer">
            <div>
              <span>
                <img src={emailIcon} alt="Email Icon" />
              </span>

              <input
                className="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                maxLength={60}
              />
            </div>
            <p className="emailError">{emailError}</p>
          </div>
          <div className="inputContainer">
            <div>
              <span>
                {" "}
                <img src={passwordIcon} alt="Password Icon" />
              </span>

              <input
                className="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                maxLength={30}
              />
            </div>
            <p className="passwordError">{passwordError}</p>
          </div>
          <button className="signUpButton">Verify</button>
          <p>
            Already have an account? <a href="/logIn">Log In</a>{" "}
          </p>
          <div className="termandCondition">
            By clicking 'Verify,' you agree to our Terms of Service and Privacy
            Policy.
          </div>
        </section>
      </div>
    </div>
  );
}
