/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/musicband.png";

const Navbar = () => {
  return (
    <div style={{ borderBottom: "1px solid white" }}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            <img
              src={logo}
              alt="Music Bands"
              style={{ width: "120px", height: "30px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to="/">
                Home
              </Link>
              <Link
                className="nav-item nav-link active text-white"
                to="/singers"
              >
                Singers
              </Link>
              <Link
                className="nav-item nav-link active text-white"
                to="/addSingers"
              >
                AddSingers
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
