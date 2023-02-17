import React, { useState, useEffect } from "react";
import "./Product.css";
import { Row, Col } from "react-bootstrap";
import * as service from "../../../Services/Api";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Cart";

function Product(props) {
  let [currentAction, setCurrentAction] = useState("description");
  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const Current_ID = Number(window.location.pathname.slice(9));
  // redux
  // global state
  const globalState = useSelector((state) => state);
  // const post = useSelector((state) =>
  //   state.posts.find((post) => post.id === postId)
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    // product
    async function GetProduct() {
      const Current_product = await service.AxiosFunction(
        "get",
        `products/${Current_ID}`
      );
      setProduct(Current_product);
      const Current_Category = Current_product.category;
      //////////// get related products///////////
      const All_Products = await service.AxiosFunction("get", "products");
      const sameCategory = All_Products.filter(
        (ele) => ele.category === Current_Category && ele.id !== Current_ID
      );
      setRelatedProducts(sameCategory.slice(0, 3));
    }
    GetProduct();
  }, []);

  return (
    <>
      <div className="product container ">
        {/* first section */}
        <div className="firstSection">
          <Row>
            {/* img */}
            <Col xs={5}>
              <img
                src={product?.image}
                alt="product img"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="200"
                data-aos-duration="5000"
                // data-aos-easing="ease-in-out"
                // data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </Col>
            {/* description */}
            <Col xs={7}>
              <div className="productDescription">
                <div className="category">
                  <span className="fieldName">Category:</span>
                  <span> {product?.category}</span>
                </div>

                <div className="productName">
                  <h1>{product?.title}</h1>
                </div>

                <div className="rating">
                  <span className="fieldName">Product Ratings: </span>
                  {/* <span>{product?.rating.rate} stars</span> */}
                </div>

                <div className="price">
                  <h3>{product?.price}$</h3>
                </div>

                <div className="description">
                  <span className="fieldName">Brief Description:</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta hic accusamus dignissimos obcaecati sapiente odit
                    sint deleniti expedita est? Provident, modi esse dolores
                    voluptate accusantium quasi laboriosam explicabo voluptatem
                    vel!
                  </p>
                </div>

                <div className="colors">
                  <span className="green"></span>
                  <span className="violet"></span>
                  <span className="grey"></span>
                </div>

                <button
                  className="btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  {" "}
                  ADD TO THE CART
                </button>
              </div>
            </Col>
          </Row>
        </div>
        {/* second section */}
        <div className="secondSection">
          <div className="buttons">
            <button
              className="btn"
              title="show description"
              onClick={() => setCurrentAction("description")}
              style={{
                border:
                  currentAction === "description"
                    ? "1px solid var(--main-color)"
                    : "transparent",
              }}
            >
              Description
            </button>
            <button
              className="btn"
              title="show review"
              onClick={() => setCurrentAction("review")}
              style={{
                border:
                  currentAction === "review"
                    ? "1px solid var(--main-color)"
                    : "transparent",
              }}
            >
              Review
            </button>
          </div>

          <div className="content">
            <p
              className="description"
              style={{
                display: currentAction === "description" ? "block" : "none",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              cupiditate cum corrupti accusamus adipisci totam illo ut. Minima,
              doloremque dolore. Recusandae aspernatur enim nostrum perferendis
              ducimus molestias possimus dolores ratione?
            </p>
            <div
              className="review"
              style={{ display: currentAction === "review" ? "block" : "none" }}
            >
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
                      <Row>
                        <Col xs={3}>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhOGmTxCf8v9uCJXpJdwqBwkyPXSCrbrA-w&usqp=CAU"
                            alt=""
                          />
                        </Col>
                        <Col xs={9}>
                          <div className="name">
                            <span className="fieldName"> - Name: </span>
                            <span> Mr. ABC</span>
                          </div>
                          <span className="fieldName"> - Comment: </span>
                          <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Enim laudantium, quas provident at veniam
                            culpa totam. Veniam a error deserunt cum. Vel fugiat
                            qui quasi exercitationem quibusdam similique
                            inventore illum?
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content">
                      <Row>
                        <Col xs={3}>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dxYh3OAod0sq20o1Dqt_J2SV-fC2MlZBrw&usqp=CAU"
                            alt=""
                          />
                        </Col>
                        <Col xs={9}>
                          <div className="name">
                            <span className="fieldName"> - Name: </span>
                            <span> Mr. ABCD</span>
                          </div>
                          <span className="fieldName"> - Comment: </span>
                          <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Enim laudantium, quas provident at veniam
                            culpa totam. Veniam a error deserunt cum. Vel fugiat
                            qui quasi exercitationem quibusdam similique
                            inventore illum?
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content">
                      <Row>
                        <Col xs={3}>
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </Col>
                        <Col xs={9}>
                          <div className="name">
                            <span className="fieldName"> - Name: </span>
                            <span> Mr. ABCDE</span>
                          </div>
                          <span className="fieldName"> - Comment: </span>
                          <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Enim laudantium, quas provident at veniam
                            culpa totam. Veniam a error deserunt cum. Vel fugiat
                            qui quasi exercitationem quibusdam similique
                            inventore illum?
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  title="previous Review"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
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
                  title="next Review"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="thirdSection">
          <h1>Related Products</h1>
          <div className="relatedProducts">
            <Row>
              {relatedProducts?.map((product) => (
                <Col xs={4} key={product?.id}>
                  <div
                    className="productCard"
                    data-aos="flip-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <img src={product?.image} alt="product img" />
                    <h3 className="productName">
                      <a
                        href={"/product/" + product?.id}
                        e
                        title="show this product details"
                      >
                        {product?.title}
                      </a>
                    </h3>
                    <span>stars</span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
