import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <footer className="bg-light text-center text-white " >
        <div
          className="text-center p-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {/* <!-- Google --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https://www.google.com/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-google-line"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/mai-saber-532082240/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          {/* <!-- Github --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/Mai-Saber"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;
