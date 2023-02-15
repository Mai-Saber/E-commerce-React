import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";

function Error(props) {
  const error = useRouteError();
  console.log("mai", error.status);
  return (
    <div className="errorPage">
      {error.status === 404 ? (
        <div>
          <h1>
            Oops! , Error {error.status}
            <span className="icon">
              {" "}
              <i className="ri-emotion-sad-line"></i>
            </span>
          </h1>
          <h3> {error.data.toUpperCase().slice(6)}</h3>
          <img
            src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
            alt="error img"
          />
          <button className="btn return">
            <a href="/">Return To Home</a>
          </button>
        </div>
      ) : (
        <h1> Some Thing Wrong</h1>
      )}
    </div>
  );
}

export default Error;
