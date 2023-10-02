import React from "react";
import { NavLink } from "react-router-dom";

export const LandingPage = () => {
  return (
    <nav className="flex justify-evenly items-center py-4 px-8 bg-blue-700">
      <div className=" text-4xl text-white ">
        <h1>Daily Expense Tracker</h1>
      </div>
      <NavLink className="no-underline text-white text-3xl" to="/login">
        LOGIN
      </NavLink>
      <NavLink className="no-underline text-white text-3xl" to="/signup">
        SIGNUP
      </NavLink>
    </nav>
  );
};
