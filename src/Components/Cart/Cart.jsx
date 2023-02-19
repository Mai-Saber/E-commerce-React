import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, setCart } from "../../Store/Cart";

function Cart(prop) {
  // redux usage
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const cart = globalState.cartReducer.cart;
  // ///////////////////////////////////////////
  let newCart = cart;
  const handleChange = (e, id) => {
    // console.log(document.getElementById(id).value);
    let product = cart.filter((item) => item.id === id);
    product.quantity = e.target.value;
    newCart = { ...cart, product };
    console.log("c", newCart);
  };

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
            <a href="/">Shop Now</a>
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
                      <Col xs={2}>
                        <img src={product.img} alt="product img" />
                      </Col>
                      <Col xs={2}>
                        <h3> {product.name}</h3>
                      </Col>
                      <Col xs={2}>
                        <h3>{Number.parseInt(product.price)}</h3>
                      </Col>
                      <Col xs={4}>
                        <div className="quantity">
                          <input
                            type="number"
                            id={product.id}
                            className="quantityNum"
                            value={product.quantity}
                            onChange={(e) => handleChange(e, product.id)}
                            name="value"
                          />
                        </div>
                      </Col>
                      <Col xs={1}>
                        <button
                          className="btn delete"
                          title="Delete this product from my wish list"
                          onClick={() => dispatch(deleteFromCart(product))}
                        >
                          <span>
                            <i className="ri-close-circle-fill"></i>
                          </span>
                        </button>
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
              <a href="/check_out">Proceed To Checkout</a>
            </button>
            <h3>Total = {globalState.cartReducer.total} $ </h3>
          </div>
        </>
      )}
    </>
  );
}
export default Cart;
