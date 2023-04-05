import React from "react";

function RegisterComplaint() {
  const registercomplain = (e) => {
    e.preventDefault();
  };
  return (
    <form className="signup-form" onSubmit={registercomplain}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="password" name="password" placeholder="Password" required />

      <button type="submit" className="btn-submit">
        REGISTER
      </button>
    </form>
  );
}

export default RegisterComplaint;
