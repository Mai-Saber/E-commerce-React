import { Row, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Cart.css";
import { useState } from "react";

function Cart(prop) {
  const products = [
    {
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      id: 1,
      name: "mai",
      price: "2345 $",
      rating: "3",
      category: "clothes",
      
    },
  ];


  const [total, setTotal] = useState(2);
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
                {products.map((ele) => (
                  <li key={ele.id}>
                    <Row className="box">
                      <Col xs={2}>
                        <img src={ele.img} alt="product img" />
                      </Col>
                      <Col xs={2}>
                        <h3> {ele.name}</h3>
                      </Col>
                      <Col xs={2}>
                        <h3>{ele.price}</h3>
                      </Col>
                      <Col xs={4}>
                        <div className="quantity">
                          <button className="btn btn-primary">+</button>
                          <input
                            type="number"
                            className="quantityNum"
                            value="1"
                          />
                          <button className="btn btn-secondary">-</button>
                        </div>
                      </Col>
                      <Col xs={1}>
                        <button
                          className="btn delete"
                          title="Delete this product from my wish list"
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
            <h3>Total = {total} $ </h3>
          </div>
        </>
      )}
    </>
  );
}
export default Cart;
