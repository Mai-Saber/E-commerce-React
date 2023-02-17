import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import authReducer from "../../../Store/Auth";
import { login, logout } from "../../../Store/Auth";
import { Link } from "react-router-dom";

function NavBar(props) {
  // redux usage
  const globalState = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const handleLogin = (status) => {
    if (status) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
    console.log(globalState.authReducer);
  };
  // //////////////////////////////////////////////////////////////////////
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* logo */}
          <Link className="navbar-brand logo" to="/">
            <img src="../../../../Logo.jpeg" alt="logo" />
          </Link>
          {/* toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* //ul// */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* //// */}
            <ul className="navbar-nav my-2 my-lg-0 icons">
              <li className="nav-item" title="go to products you wish to buy">
                <Link className="nav-link" to="/wish-products">
                  <i className="ri-heart-3-fill"></i>
                </Link>
              </li>
              <li className="nav-item" title="go to cart">
                <Link className="nav-link" to="/cart">
                  <i className="ri-shopping-cart-fill"></i>
                </Link>
              </li>
              <li
                className="nav-item"
                title="login"
                onClick={() => handleLogin(globalState.authReducer.isLogged)}
              >
                <Link className="nav-link" to="/login">
                  <i
                    className={
                      globalState.authReducer.isLogged
                        ? "ri-logout-box-line"
                        : "ri-login-box-line"
                    }
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
