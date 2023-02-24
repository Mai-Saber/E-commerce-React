import { useState, useEffect } from "react";
import "./App.css";
import "./Components/Commons/DarkMode/DarkMode.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/SpecificProduct/Product";
import Login from "./Components/Login/Login";
import Error from "./Components/Commons/ErrorPage/Error";
import WishProducts from "./Components/Wish Products/wishProducts";
import Checkout from "./Components/CheckOut/Checkout";
import ProtectedRoute from "./Components/Commons/ProtectedRoute/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { darkMode, lightMode } from "./Store/DarkMode";
import ScrollToTop from "./Components/Commons/ScrollUp/ScrollUp";

// ///////////////////////////////////////

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const theme = globalState.DarkModeReducer.theme;

  const handleTheme = () => {
    if (theme === "light") {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  };
  // //////////////
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={`App ${theme}`}>
        <button onClick={handleTheme} className="modeButton">
          {theme === "light" ? (
            <i class="ri-moon-fill" title="change to dark mode"></i>
          ) : (
            <i class="ri-sun-line" title="change to light mode"></i>
          )}
        </button>

        <BrowserRouter>
          <ScrollToTop/>
          <ToastContainer />
          <NavBar />
          <main className="main" id="main">
            <Routes>
              <Route path="/" exact element={<Home />} />,
              <Route path="/contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/wish-products" element={<WishProducts />} />
                <Route path="/cart" element={<Cart />} />,
                <Route path="/check_out" element={<Checkout />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
