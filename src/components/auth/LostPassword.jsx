import React from "react";

const LostPassword = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center d-flex vh-100">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Recover Password!</h1>
                      </div>

                      <form class="user">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>

                        <a
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Retrieve Password
                        </a>
                        <hr></hr>
                      </form>

                      <hr />

                      <div class="text-center">
                        <a class="small" href="/">
                          Back Home
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

export default LostPassword;
