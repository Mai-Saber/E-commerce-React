import React from "react";
import "./Error.css";
import { Link } from 'react-router-dom';

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
          <Link to="/">Return To Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Error;
