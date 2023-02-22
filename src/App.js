import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import NavBar from "./Components/LayOut/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/SpecificProduct/Product";
import Login from "./Components/Login/Login";
import Error from "./Components/Commons/ErrorPage/Error";
import WishProducts from "./Components/Wish Products/wishProducts";
import Checkout from "./Components/CheckOut/Checkout";
import ProtectedRoute from "./Components/Commons/ProtectedRoute";

// ///////////////////////////////////////

function App() {
  return (
    <>
      <BrowserRouter>
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
    </>
  );
}

export default App;
