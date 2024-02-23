import React from 'react'

const Register = () => {
  return (
    <div>
      <form className="form">
        <div class="login mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold">
           FirstName
          </label>
          <input className="input"
            placeholder="FirstName"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="login mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold">
           LastName
          </label>
          <input className="input"
           placeholder="LastName"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
  
        </div>
        <div class="login mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold">
            Email address
          </label>
          <input className="input"
            placeholder="Email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label fw-bold">
            Password
          </label>
          <input className="input"
           placeholder="Password"
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
  
export default Register
