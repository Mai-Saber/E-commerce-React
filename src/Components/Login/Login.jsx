import React, { useState } from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import authReducer from "../../Store/Auth";
import { login } from "../../Store/Auth";
import { Link } from "react-router-dom";

function Login(props) {
  const [account, setAccount] = useState({
    user: "",
    password: "",
  });

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  // functions
  const handleChange = (e) => {
    const newAccount = {
      ...account,
      [e.target.name]: e.target.value,
    };
    setAccount(newAccount);
  };
  // /////////////////////

  const handleSubmit = () => {
    dispatch(login());
    console.log(account);
  };
  // /////////////////////////
  return (
    <div className="loginScreen">
      <div className="box">
        <form>
          <TextField
            className="input"
            id="standard-basic"
            label="User Name"
            type="text"
            variant="outlined"
            name="user"
            value={account.user}
            onChange={(e) => handleChange(e)}
            title="Write your user name please.."
            autoFocus
          />
          <TextField
            className="input"
            id="standard-basic "
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={account.password}
            onChange={(e) => handleChange(e)}
            title="must be more than 3 characters"
          />
          {account.password.trim() !== "" && account.password.length < 3 && (
            <p className="alert alert-danger">
              Must be more than 3 digits
            </p>
          )}

          <Button
            className="btn btn-primary"
            variant="contained"
            onClick={handleSubmit}
            id="submit"
            disabled={
              !account.user || account.password.length < 3 ? true : false
            }
          >
            <Link to="/">Submit</Link>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
