import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const RequireAuth = ({ children }) => {
  const authState = useSelector((state) => state.auth);
  console.log(authState);
  if (!authState.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
