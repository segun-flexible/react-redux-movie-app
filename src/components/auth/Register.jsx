import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../utils/FontAwesome";
const Register = () => {
  document.querySelector("body").classList.add("bg-gradient-secondary");
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center d-flex vh-100">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>

                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Register!</h1>
                      </div>

                      <form class="user">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            name="username"
                            placeholder="Enter Username..."
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Confrim Password"
                          />
                        </div>

                        <a
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Register
                        </a>
                        <hr></hr>

                        <a
                          href="index.html"
                          class="btn btn-facebook btn-user btn-block"
                        >
                          <FontAwesomeIcon icon={faFacebook} /> Register with
                          Facebook
                        </a>
                      </form>

                      <hr />

                      <div class="text-center">
                        <a class="small" href="forgot-password.html">
                          Already Have An Account?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
