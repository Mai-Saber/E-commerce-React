import React from "react";
import { useSelector } from "react-redux";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import { Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  const state = useSelector((state) => state);
  const login = state.authReducer.isLogged;

  return login ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
