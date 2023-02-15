import React, { useState } from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";

function Login(props) {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const newAccount = {
      ...account,
      [e.target.name]: e.target.value,
    };
    setAccount(newAccount);
  };
  const handleSubmit = () => {
    console.log(account);
    window.location.replace("/");
  };

  return (
    <div className="loginScreen">
      <div className="box">
        <form>
          <TextField
            className="input"
            id="standard-basic"
            label="Email"
            type="email"
            variant="outlined"
            required
            name="email "
            value={account.email}
            onChange={handleChange}
          />
          <TextField
            className="input"
            id="standard-basic "
            label="Password"
            type="password"
            variant="outlined"
            required
            name="password"
            value={account.password}
            onChange={handleChange}
          />
          <Button
            className="btn btn-primary"
            variant="contained"
            onClick={handleSubmit}
            id="submit"
            //   disabled={role === "" ? true : false}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
