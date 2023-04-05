import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./sign.css";
function Signin() {
  const form = useRef();
  const signin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <div className="signup_container">
        <p className="signup-head">SIGN IN</p>
        <form className="signup-form" ref={form} onSubmit={signin}>
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="btn-submit">
            SIGN IN
          </button>
          <p className="redirecting">
            Create account &nbsp;
            <Link
              className="link"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
