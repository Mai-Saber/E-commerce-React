import { Row, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./wishProducts.css";
import { useSelector ,useDispatch } from "react-redux";
import wishListReducer, { removeFromLovelyList } from "../../Store/WishList";
import { addToCart } from "../../Store/Cart";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function WishProducts(prop) {
  const cart = useSelector((state) => state.cartReducer.cart);
  const wishListProducts = useSelector(
    (state) => state.wishListReducer.wishList
  );
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Store | Wish List</title>
      </Helmet>
      {/* wish list  */}
      <div className="wishList">
        {!wishListProducts.length && (
          <div className="empty">
            <img
              className="noProducts"
              src="https://cdn.igp.com/raw/upload/assets/images/no_product_5.png"
              alt=""
            />
            <button className="btn">
              <Link to="/">Return to Home</Link>
            </button>
          </div>
        )}

        {wishListProducts.length !== 0 && (
          <div className=" container">
            <h1 className="animate__animated animate__backInDown">
              Products you want to buy Later
            </h1>
            <div className="line"> </div>
            {/* products */}
            <ul className="products">
              {wishListProducts.map((ele) => (
                <li key={ele.id}>
                  <Row className="product">
                    <Col xs={6} md={2}>
                      <img src={ele.image} alt="product img" />
                    </Col>
                    <Col xs={6} md={3}>
                      <h3 className="title"> {ele.title}</h3>
                    </Col>
                    <Col xs={6} md={3}>
                      <h3 className="price">{Number.parseInt(ele.price)} $</h3>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="icons">
                        <IconButton
                          className="cart"
                          color="primary"
                          aria-label="add to shopping cart"
                          title="add to shopping cart"
                          onClick={() => dispatch(addToCart(ele))}
                          disabled={cart.includes(ele) ? true : false}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>

                        <button
                          className="btn delete"
                          title="Delete this product from my wish list"
                        >
                          <span
                            className="close"
                            onClick={() => dispatch(removeFromLovelyList(ele))}
                          >
                            <i className="ri-close-circle-fill"></i>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default WishProducts;
