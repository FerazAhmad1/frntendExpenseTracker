import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import budget from "../Images/Budget.jpeg";
import { useSelector } from "react-redux";
import { LeaderBoard } from "./LeaderBoard";
import axios from "axios";
export const LandingPage = () => {
  const authState = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchLeaderBoard() {
      const leaderBoardData = await axios.get(
        "http://localhost:3002/api/v1/expense/leaderbord"
      );
      return leaderBoardData.data.data;
    }

    const data = fetchLeaderBoard().then((data) => {
      setData(data);
      localStorage.setItem("leaderBordData", JSON.stringify(data));
    });
  }, []);
  console.log(data, "datadddddddddddddddddddddddddddd");
  console.log(authState);
  const tableHeader = ["No.", "Name", "Score"];
  const propertes = ["name", "totalamount"];
  return (
    <div className="flex flex-col justify-end">
      <nav
        className={`  box-border  flex-1 
       flex  flex-col max-h-fit bg-black md:flex-row md:justify-evenly md:items-center `}>
        <div className=" p-10 text-5xl text-white ">
          <h1 className="uppercase">Daily Expense Tracker</h1>
        </div>
        {!authState.isLoggedIn && (
          <NavLink
            className=" p-10 hover:border-b-2 + border-red-800 +ease-in-out  no-underline text-white md:text-3xl "
            to="/login">
            LOGIN
          </NavLink>
        )}
        {!authState.isLoggedIn && (
          <NavLink
            className=" p-10 hover:border-b-2 + border-red-800 +ease-in-out no-underline text-white md:text-3xl"
            to="/signup">
            SIGNUP
          </NavLink>
        )}
      </nav>
      <div className="flex justify-end ">
        <div className="flex flex-col justify-center p-3  items-center border border-black  ">
          <h1 className="flex text-3xl font-bold">LeaderBoard</h1>
          <LeaderBoard
            data={data}
            tableHeader={tableHeader}
            properties={propertes}
          />
        </div>
      </div>
    </div>
  );
};
