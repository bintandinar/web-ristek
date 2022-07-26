import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function Navbar({ token }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(`/`);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="/" className="navbar-brand mx-auto mx-lg-0">
          Dinar's Blog
        </a>

        <div className="d-flex align-items-center d-lg-none">
          <i className="navbar-icon bi-telephone-plus me-3"></i>
          <a className="custom-btn btn" href="#section_5">
            +6281213420493
          </a>
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-between align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_1">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_2">
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_4">
                My Blog
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_5">
                Contact
              </a>
            </li>
          </ul>
          {!token ? (
            <Link to={`/login`}>
              <button className="btn">Login</button>
            </Link>
          ) : (
            <div className="btn-group">
              <Link to={`new-blog`}>
                <button className="btn">Add New Blog</button>
              </Link>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
