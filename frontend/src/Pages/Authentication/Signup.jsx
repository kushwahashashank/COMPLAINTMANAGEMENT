import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./sign.css";
function Signup() {
  const form = useRef();
  const signup = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <div className="signup_container">
        <p className="signup-head">SIGN UP</p>
        <form className="signup-form" ref={form} onSubmit={signup}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn-submit">
            SIGN UP
          </button>
          <p className="redirecting">
            Already have accout &nbsp;
            <Link
              className="link"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/signin"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
