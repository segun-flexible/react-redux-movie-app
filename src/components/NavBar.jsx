import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchMovie, setSearchTermAction } from "../redux/actions";
import trimQuery from "./functions/trimQuery";

const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState({ search: "", error: [] });
  const [showNav, setShowNav] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.search.trim() !== "") {
      props.searchMovie(trimQuery(searchTerm.search));

      //Quickly Setting Global Search
      props.setSearchTermAction(searchTerm.search);

      //Clearing Search Field
      setSearchTerm({ ...searchTerm, search: "" });
    }
    props.history.push("/");
  };
  return (
    <nav className="navbar navbar-expand navbar-dark topbar mb-4 pl-0 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <form
        className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-white border-0 small"
            placeholder="Search for Movies..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            name="search"
            value={searchTerm.search}
            onChange={(e) =>
              setSearchTerm({ ...searchTerm, search: e.target.value })
            }
          />
          <div className="input-group-append">
            <button className="btn bg-white" type="submit">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            id="searchDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => setShowNav(!showNav)}
          >
            <i className="fas fa-search fa-fw"></i>
          </a>
          {/* <!-- Dropdown - Messages --> */}
          <div
            className={`dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in ${
              showNav ? "show" : ""
            }`}
            aria-labelledby="searchDropdown"
          >
            <form
              className="form-inline mr-auto w-100 navbar-search"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  name="search"
                  value={searchTerm.search}
                  onChange={(e) =>
                    setSearchTerm({ ...searchTerm, search: e.target.value })
                  }
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(
  connect(null, { searchMovie, setSearchTermAction })(NavBar)
);
