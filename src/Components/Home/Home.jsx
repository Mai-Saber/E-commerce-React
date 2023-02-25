import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ColorRing } from "react-loader-spinner";
import { Typewriter } from "react-simple-typewriter";
import * as service from "../../Services/Api";
import Rating from "@mui/material/Rating";

import "animate.css";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Store/Cart";
import { addToLovelyList, removeFromLovelyList } from "../../Store/WishList";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ScrollToTop from "../Commons/ScrollUp/ScrollUp";

function Home(props) {
  const [loading, setLoading] = useState(true);
  let [allProducts, setAllProducts] = useState([]);
  let [categoryProducts, setCategoryProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("All Products");

  // redux
  // global state
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const cart = globalState.cartReducer.cart;

  useEffect(() => {
    // loading
    setTimeout(function () {
      setLoading(false);
    }, 4000);

    // products
    async function GetProducts() {
      // const arr = [];
      const response = await service.AxiosFunction("get", "products");
      // for (const product of response) {
      //   arr.push({
      //     ...product
      //     // ,quantity: 2
      //   });
      // }
      setAllProducts(response);
      setCategoryProducts(response);
    }
    GetProducts();
    // filtration items
    async function GetCategories() {
      const response = await service.AxiosFunction(
        "get",
        "products/categories"
      );
      setCategories(response);
    }
    GetCategories();
  }, []);

  // ////////////////////////
  const handleFilterCategories = (categoryName) => {
    setCategoryName(categoryName);
    if (categoryName === "All Products") {
      setCategoryProducts(allProducts);
    } else {
      const response = allProducts.filter(
        (ele) => ele.category === categoryName
      );
      setCategoryProducts(response);
    }
  };
  // //////////////////
  // handle wish list
  const wishList = globalState.wishListReducer.wishList;

  const handleWishList = (product) => {
    if (wishList.includes(product)) {
      dispatch(removeFromLovelyList(product));
    } else {
      dispatch(addToLovelyList(product));
    }
  };

  // ///////////////////////////
  return (
    <>
      {/* loading spinner */}
      {loading && (
        <div className="loading">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      )}

      {!loading && (
        <div className="home">
          {/* carousel */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="content ">
                  <img
                    className="w-100"
                    src="data:image/jpeg;base64,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"
                    alt="carousel img"
                  />
                  <div className="heading">
                    <span>
                      <Typewriter
                        words={[" Welcome in my store"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={100}
                        delaySpeed={3000}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="content">
                  <img
                    className="w-100"
                    src="data:image/jpeg;base64,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"
                    alt="carousel img"
                  />
                  <div className="heading">
                    <span>Enjoy This Offer</span>
                    <h1>
                      Sale{" "}
                      <Typewriter
                        words={["50% on clothes", "40% on laptop"]}
                        loop={300}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={200}
                        delaySpeed={4000}
                      />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <img
                    className="w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFZAgCoYFo9un-Aq3L0zgjwp3fQIOeIzjTw&usqp=CAU"
                    alt="carousel img"
                  />
                  <div className="heading">
                    <span>Hope you like it</span>
                    <h1>Shop Now</h1>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              title="previous"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              title="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* products */}
          {categories.length === 0 && categoryProducts.length === 0 && (
            <div className="spinner">
              <p>Please Wait</p>
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          )}
          {categories.length > 0 && categoryProducts.length > 0 && (
            <div className="shopContainer container">
              <Row>
                {/* filtration */}
                <Col xs={12} lg={4}>
                  <div className="filtration">
                    <h4>Select Category </h4>
                    <ul>
                      <li>
                        <button
                          className="btn"
                          title={"watch All Products"}
                          onClick={() => handleFilterCategories("All Products")}
                        >
                          All Products
                        </button>
                      </li>
                      {categories?.map((ele) => (
                        <li key={ele}>
                          <button
                            className="btn"
                            title={"watch " + ele + " Section"}
                            onClick={() => handleFilterCategories(ele)}
                          >
                            {ele}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
                {/* products */}
                <Col xs={12} lg={8}>
                  <div className="shopProducts container">
                    <h1 className="sectionName">{categoryName} section</h1>
                    <div className="boxes ">
                      {/* product card */}
                      <Row>
                        {categoryProducts?.map((product) => (
                          <Col xs={12} sm={6} xl={4} key={product.id}>
                            <div
                              className="card"
                              data-aos="flip-up"
                              data-aos-duration="1500"
                            >
                              <div className="imgDiv">
                                <img src={product.image} alt="product img" />
                              </div>
                              <div className="price">
                                <p>{Number.parseInt(product.price)} $</p>
                              </div>
                              <div className="buttons">
                                <div
                                  className="section"
                                  title={product.category}
                                >
                                  {product.category}
                                </div>
                                <div className="left_buttons">
                                  <button
                                    className="btn heart"
                                    title="add to lovely products"
                                    onClick={() => handleWishList(product)}
                                  >
                                    <i
                                      className={
                                        wishList.includes(product)
                                          ? "ri-heart-fill"
                                          : "ri-heart-line"
                                      }
                                    ></i>
                                  </button>
                                  <span
                                    className="btn cart"
                                    title="add to cart"
                                  >
                                    <IconButton
                                      color="primary"
                                      aria-label="add to shopping cart"
                                      title="add to shopping cart"
                                      onClick={() => {
                                        dispatch(addToCart(product));
                                      }}
                                      disabled={
                                        cart.includes(product) ? true : false
                                      }
                                    >
                                      <AddShoppingCartIcon />
                                    </IconButton>
                                  </span>
                                </div>
                              </div>
                              <div className="cardContent">
                                <h3>Description:</h3>
                                <p>{product.title}</p>
                              </div>
                              <div className="rating">
                                <Rating
                                  name="read-only"
                                  value={Math.floor(product?.rating.rate)}
                                  readOnly
                                />
                              </div>
                              <button
                                className="btn details"
                                title="go to this product details"
                              >
                                <Link to={`/product/${product?.id}`}>
                                  More Details
                                </Link>
                              </button>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}
          {/* scroll to top */}
          <ScrollToTop></ScrollToTop>
        </div>
      )}
    </>
  );
}

export default Home;
