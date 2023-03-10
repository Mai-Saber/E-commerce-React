import React from "react";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/Auth";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { darkMode, lightMode } from "../../Store/DarkMode";
import { Col, Row } from "react-bootstrap";

function NavBar(props) {
  // redux usage
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const login = globalState.authReducer.isLogged;
  const theme = globalState.DarkModeReducer.theme;

  const handleTheme = () => {
    if (theme === "light") {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  };

  // //////////////////////////////////////////////////////////////////////
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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

          {/* logo */}
          <NavLink className="navbar-brand logo" to="/">
            <img src="../../../../Logo.jpeg" alt="logo" />
          </NavLink>
          {/* //ul// */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {/* span inside NavLink to toggle navbar,notice: this is the same toggle button's attributes   */}
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarTogglerDemo02"
                      aria-controls="navbarTogglerDemo02"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                    >
                      Home
                    </span>
                  </NavLink>
                </li>
              }
              {/* //// */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    About
                  </span>
                </NavLink>
              </li>
              {/* //// */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    Contact
                  </span>
                </NavLink>
              </li>
            </ul>

            {/* //// */}

            <ul className="navbar-nav my-2 my-lg-0 icons">
              <li className="nav-item" title="go to products you wish to buy">
                <NavLink
                  className="nav-link"
                  to="/wish-products"
                  onClick={
                    !login ? () => toast.error("Please Login First") : null
                  }
                >
                  {globalState.wishListReducer.wishList.length !== 0 && (
                    <span className="wish_circle circle">
                      {globalState.wishListReducer.wishList.length}
                    </span>
                  )}

                  <span
                    className="wish"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <i className="ri-heart-3-fill"></i>
                  </span>
                </NavLink>
              </li>
              {/* //// */}
              <li className="nav-item" title="go to cart">
                <NavLink
                  className="nav-link"
                  to="/cart"
                  onClick={
                    !login ? () => toast.error("Please Login First") : null
                  }
                >
                  {globalState.cartReducer.cart.length !== 0 && (
                    <span className="cart_circle circle">
                      {globalState.cartReducer.cart.length}
                    </span>
                  )}

                  <span
                    className="cart"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <i className="ri-shopping-cart-fill"></i>
                  </span>
                </NavLink>
              </li>
              {/* //// */}
              <li
                className="nav-item"
                title={login ? "click to logout" : " click to login"}
              >
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={login && (() => dispatch(logout()))}
                >
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <i
                      className={
                        login ? "ri-logout-box-line" : "ri-login-box-line"
                      }
                    ></i>
                  </span>
                </NavLink>
              </li>
              {/* ///// */}
              <li>
                <span
                  onClick={handleTheme}
                  className="modeButton"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  Theme :
                  {theme === "light" ? (
                    <i className="ri-sun-line" title="change to dark mode"></i>
                  ) : (
                    <i
                      className="ri-moon-fill"
                      title="change to light mode"
                    ></i>
                  )}
                </span>
              </li>
              {/* //// */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
