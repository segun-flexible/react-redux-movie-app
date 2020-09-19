import React from "react";

const Footer = () => {
  return (
    <>
      <br></br>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>
              Copyright © Movie App | Made with{" "}
              <i className="fas fa-heart fa-fw text-danger"></i> by{" "}
              <a
                target="_blank "
                rel="noopener noreferrer"
                href="https://wapforum.com.ng"
              >
                Flexible
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
