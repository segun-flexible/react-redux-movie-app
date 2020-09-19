import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const logo = "/img/logo.png";
  const icon = "/img/logo-icon.png";
  return (
    <ul
      className="navbar-nav sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/*  <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img src={icon} alt="" />
        </div>
        <div className="sidebar-brand-text mx-3">
          <img src={logo} alt="" />
        </div>
      </Link>
      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/favourite">
          <i className="fas fa-fw fa-film"></i>
          <span>Favourite</span>
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
