import { Row, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./wishProducts.css";

function WishProducts(prop) {
  const products = [
    // {
    //   img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //   id: 1,
    //   name: "mai",
    //   price: "2345$",
    //   rating: "3",
    //   category: "clothes",
    // },
  ];
  return (
    <>
      <div className="wishList">
        {!products.length && (
          <div className="empty">
            <img
              className="noProducts"
              src="https://cdn.igp.com/raw/upload/assets/images/no_product_5.png"
              alt=""
            />
            <button className="btn">
              <a href="/">Return to Home</a>
            </button>
          </div>
        )}

        {products.length !== 0 && (
          <div className=" container">
            <h1 className="animate__animated animate__backInDown">
              Products you want to buy Later
            </h1>
            <div className="line"> </div>
            {/* products */}
            <ul className="products">
              {products.map((ele) => (
                <li key={ele.id}>
                  <Row className="product">
                    <Col xs={2}>
                      <img src={ele.img} alt="product img" />
                    </Col>
                    <Col xs={3}>
                      <h3> {ele.name}</h3>
                    </Col>
                    <Col xs={3}>
                      <h3>{ele.price}</h3>
                    </Col>
                    <Col xs={4}>
                      <div className="icons">
                        <button className="btn" title="Add to cart">
                          <IconButton
                            className="cart"
                            color="primary"
                            aria-label="add to shopping cart"
                            title="add to shopping cart"
                          >
                            <AddShoppingCartIcon />
                          </IconButton>
                        </button>
                        <button
                          className="btn delete"
                          title="Delete this product from my wish list"
                        >
                          <span
                            className="close"
                            //   onClick={() => handleClose(item.id)}
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
