import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart} from "../../Store/Cart";
import { Link } from 'react-router-dom';


function Cart(prop) {
  // redux usage
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const cart = globalState.cartReducer.cart;

  // ///////////////////////////////////////////

  // ////////////////////////////////////////////////

  return (
    <>
      {!cart.length && (
        <div className="empty">
          <img
            className="noProducts"
            src="../../../../../cartEmpty.jpeg"
            alt=""
          />
          <button className="btn">
            <Link to="/">Shop Now</Link>
          </button>
        </div>
      )}
      {cart.length !== 0 && (
        <>
          <div className="shoppingCart">
            <div className=" container">
              <h1 className="address">Shopping Cart</h1>
              {/* products */}
              <ul className="products">
                {cart.map((product) => (
                  <li key={product.id}>
                    <Row className="box">
                      <Col xs={6} md={2}>
                        <div className="imgDiv">
                          <img src={product.image} alt="product img" />
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                        <h3 className="title"> {product.title}</h3>
                      </Col>
                      <Col xs={5} md={2}>
                        <h3 className="price">
                          {Number.parseInt(product.price)} $
                        </h3>
                      </Col>
                      <Col xs={5} md={4}>
                        <div className="quantity">
                          <input
                            type="number"
                            id={product.id}
                            className="quantityNum"
                            value={product.quantity}
                            // onChange={(e) => handleChange(e, product)}
                            name="value"
                          />
                        </div>
                      </Col>
                      <Col xs={2} md={1}>
                        <div className="icons">
                          <button
                            className="btn delete"
                            title="Delete this product from my wish list"
                            onClick={() => dispatch(deleteFromCart(product))}
                          >
                            <span>
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
          </div>
          {/* total */}
          <div className="totalBox box">
            <button className="btn proceed">
              <Link to="/check_out">Proceed To Checkout</Link>
            </button>
            <h3>Total = {globalState.cartReducer.total} $ </h3>
          </div>
        </>
      )}
    </>
  );
}
export default Cart;
