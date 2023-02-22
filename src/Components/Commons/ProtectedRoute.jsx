import React from "react";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import {Outlet }from 'react-router-dom';

function ProtectedRoute() {
  const state = useSelector((state) => state);
  const login = state.authReducer.isLogged;
  

  return login ? <Outlet /> : <Home />;
}

export default ProtectedRoute;
