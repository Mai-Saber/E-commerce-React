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
              {/* //// */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* //// */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* //// */}
            <ul className="navbar-nav my-2 my-lg-0 icons">
              <li className="nav-item" title="go to products you wish to buy">
                <Link
                  className="nav-link"
                  to={login ? "/wish-products" : "/"}
                  onClick={
                    !login ? () => toast.error("Please Login First") : null
                  }
                >
                  <span className="circle">
                    {globalState.wishListReducer.wishlist?.length}
                  </span>

                  <span className="cart_wish">
                    <i className="ri-heart-3-fill"></i>
                  </span>
                </Link>
              </li>
              {/* //// */}
              <li className="nav-item" title="go to cart">
                <Link
                  className="nav-link"
                  to={login ? "/cart" : "/"}
                  onClick={
                    !login ? () => toast.error("Please Login First") : null
                  }
                >
                  <i className="ri-shopping-cart-fill"></i>
                </Link>
              </li>
              {/* //// */}
              <li className="nav-item" title="login">
                <Link className="nav-link" to="/login">
                  <i
                    className={
                      login ? "ri-logout-box-line" : "ri-login-box-line"
                    }
                  ></i>
                </Link>
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
