import { Row, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../../Redux/Counter";
import { deleteFromCart } from "../../../Redux/Cart";
import { store } from '../../../Redux/Store';

function Cart(prop) {
  // redux usage
  console.log("state",store.getState().cartReducer)
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const products = globalState.cartReducer.cart;
  // console.log("state", globalState.cartReducer);


  return (
    <>
      {!products.length && (
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
      {products.length !== 0 && (
        <>
          <div className="shoppingCart">
            <div className=" container">
              <h1 className="address">Shopping Cart</h1>
              {/* products */}
              <ul className="products">
                {products.map((product) => (
                  <li key={product.id}>
                    <Row className="box">
                      <Col xs={2}>
                        <img src={product.img} alt="product img" />
                      </Col>
                      <Col xs={2}>
                        <h3> {product.name}</h3>
                      </Col>
                      <Col xs={2}>
                        <h3>{product.price}</h3>
                      </Col>
                      <Col xs={4}>
                        <div className="quantity">
                          <button
                            className="btn btn-primary"
                            onClick={() => dispatch(increase(50))}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            className="quantityNum"
                            value={globalState.counterReducer.value}
                          />
                          <button
                            className="btn btn-secondary"
                            onClick={() => dispatch(decrease(2))}
                          >
                            -
                          </button>
                        </div>
                      </Col>
                      <Col xs={1}>
                        <button
                          className="btn delete"
                          title="Delete this product from my wish list"
                          onClick={() => dispatch(deleteFromCart(product))}
                        >
                          <span
                          // className="close"
                          //   onClick={() => handleClose(item.id)}
                          >
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
