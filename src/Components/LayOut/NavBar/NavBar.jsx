import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import authReducer from "../../../Store/Auth";
import { login, logout } from "../../../Store/Auth";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import wishListReducer from "../../../Store/WishList";

function NavBar(props) {
  // redux usage
  const globalState = useSelector((state) => state);
  const login = globalState.authReducer.isLogged;
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
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {/* //// */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {/* //// */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* //// */}
            <ul className="navbar-nav my-2 my-lg-0 icons">
              <li className="nav-item" title="go to products you wish to buy">
                <NavLink
                  className="nav-link"
                  to={login ? "/wish-products" : "/"}
                  onClick={
                    !login ? () => toast.error("Please Login First") : null
                  }
                >
                  <span className="circle">
                    {globalState.wishListReducer.wishlist.length}
                    mai
                  </span>

                  <span className="cart_wish">
                    <i className="ri-heart-3-fill"></i>
                  </span>
                </NavLink>
              </li>
              {/* //// */}
              <li className="nav-item" title="go to cart">
                <NavLink
                  className="nav-link"
                  to={login ? "/cart" : "/"}
                  onClick={
                    !login ? () => toast.error("Please Login First") : null
                  }
                >
                  <i className="ri-shopping-cart-fill"></i>
                </NavLink>
              </li>
              {/* //// */}
              <li
                className="nav-item"
                title="login"
                onClick={() => handleLogin(globalState.authReducer.isLogged)}
              >
                <NavLink className="nav-link" to="/login">
                  <i
                    className={
                      globalState.authReducer.isLogged
                        ? "ri-logout-box-line"
                        : "ri-login-box-line"
                    }
                  ></i>
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
