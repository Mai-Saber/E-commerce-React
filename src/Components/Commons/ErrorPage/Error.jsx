import React from "react";
import "./Error.css";

function Error(props) {
  return (
    <div className="errorPage">
      <div>
        <h1>
          Oops! , Error
          <span className="icon">
            {" "}
            <i className="ri-emotion-sad-line"></i>
          </span>
        </h1>
        <img
          src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
          alt="error img"
        />
        <button className="btn return">
          <a href="/">Return To Home</a>
        </button>
      </div>
    </div>
  );
}

export default Error;
