import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import authReducer from "../../Store/Auth";
import { login, logout } from "../../Store/Auth";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import wishListReducer from "../../Store/WishList";
import cartReducer from "../../Store/Cart";
import { color } from "@mui/system";

function NavBar(props) {
  // redux usage
  const globalState = useSelector((state) => state);
  const login = globalState.authReducer.isLogged;
  const dispatch = useDispatch();

  // //////////////////////////////////////////////////////////////////////
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* logo */}
          <NavLink className="navbar-brand logo" to="/">
            <img src="../../../../Logo.jpeg" alt="logo" />
          </NavLink>
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
              {/* //// */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
