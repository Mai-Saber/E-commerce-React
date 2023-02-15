import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Body/Home/Home";
import Contact from "./Components/Body/Contact/Contact";
import About from "./Components/Body/About/About";
import Cart from "./Components/Body/Cart/Cart";
import Product from "./Components/Body/SpecificProduct/Product";
import Login from "./Components/Login/Login";
import Error from "./Commons/ErrorPage/Error";
import WishProducts from "./Components/Body/Wish Products/wishProducts";
import Checkout from './Components/Body/CheckOut/Checkout';

// ///////////////////////////////////////
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} errorElement={<Error />} />,
    <Route path="/contact" element={<Contact />} errorElement={<Error />} />,
    <Route path="/About" element={<About />} errorElement={<Error />} />,
    <Route
      path="/product/:id"
      element={<Product />}
      errorElement={<Error />}
    />,
    <Route
      path="/wish-products"
      element={<WishProducts />}
      errorElement={<Error />}
    />,
    <Route path="/cart" element={<Cart />} errorElement={<Error />} />,
    <Route path="/login" element={<Login />} errorElement={<Error />} />,
    <Route path="/check_out" element={<Checkout />} errorElement={<Error />} />,
  ])
);

function App() {
  return (
    <>
      <NavBar />
      <main className="main" id="main">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
