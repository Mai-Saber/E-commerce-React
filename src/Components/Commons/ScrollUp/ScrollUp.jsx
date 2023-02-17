import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  return (
    <div>
      <span
        class="hero__scroll aos-init aos-animate"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
      >
        Scroll down
        <i class="ri-arrow-up-s-line chevron"></i>
      </span>
    </div>
  );
};

export default ScrollUp;
