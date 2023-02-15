import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";

function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-items">
          <div className="logo">
            <a className="navbar-brand" href="/">
              <img src="../../../../Logo.jpeg" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* content */}
          <div className="words">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* icons */}
          <div className="icons">
            <ul className="navbar-nav">
              <li className="nav-item" title="go to products you wish to buy">
                <a className="nav-link" href="/wish-products">
                  <i className="ri-heart-3-fill"></i>
                </a>
              </li>
              <li className="nav-item" title="go to cart">
                <a className="nav-link" href="/cart">
                  <i className="ri-shopping-cart-fill"></i>
                </a>
              </li>
              <li className="nav-item" title="login">
                <a className="nav-link" href="/login">
                  <i className="ri-login-box-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
