import "./ScrollUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Link
      className="toTopIcon"
      to="#"
      style={{ right: show ? "2rem" : "-5rem" }}
      onClick={handleScroll}
    >
      <i class="ri-arrow-up-s-line"></i>
    </Link>
  );
}

export default ScrollToTop;
