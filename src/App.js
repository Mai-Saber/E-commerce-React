import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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

// ///////////////////////////////////////

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className="main" id="main">
          <Switch>
            <Route path="/" exact component={Home} />,
            <Route path="/contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/product/:id" component={Product} />
            <Route path="/wish-products" component={WishProducts} />
            <Route path="/cart" component={Cart} />,
            <Route path="/login" component={Login} />
            <Route path="/check_out" component={Checkout} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
