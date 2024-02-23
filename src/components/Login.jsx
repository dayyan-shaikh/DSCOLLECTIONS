import React from "react";
import './Login.css'
const Login = () => {
  return (
    <div className="bg">
      <form className="form">
        <div class="login mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold">
            Username/Email address
          </label>
          <input className="input"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label fw-bold">
            Password
          </label>
          <input className="input"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
          <label class="form-check-label fw-bold3" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;