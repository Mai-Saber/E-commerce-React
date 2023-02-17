import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import authReducer from "../../Redux/Auth";
import { login, logout } from "../../Redux/Auth";

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
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          {/* logo */}
          <a class="navbar-brand logo" href="/">
            <img src="../../../../Logo.jpeg" alt="logo" />
          </a>
          {/* toggle button */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* //ul// */}
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* //// */}
            <ul class="navbar-nav my-2 my-lg-0 icons">
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
              <li
                className="nav-item"
                title="login"
                onClick={() => handleLogin(globalState.authReducer.isLogged)}
              >
                <a className="nav-link" href="/login">
                  <i
                    className={
                      globalState.authReducer.isLogged
                        ? "ri-logout-box-line"
                        : "ri-login-box-line"
                    }
                  ></i>
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

     