import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import budget from "../Images/Budget.jpeg";

export const LandingPage = () => {
  const stickyNavref = useRef(null);
  const [stickyClass, setStickyClass] = useState(true);
  const stickyNav = (entries, option) => {
    console.log(entries[0], "entries");
    if (!entries[0].isIntersecting && entries[0].intersectionRatio !== 1) {
      setStickyClass("fixed bg-transparent");
      console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    } else {
      // setStickyClass("");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });
    observer.observe(stickyNavref.current);
  }, []);

  return (
    <>
      <nav
        ref={stickyNavref}
        className={` ${stickyClass} box-border  flex-1
       flex  flex-col max-h-fit bg-black md:flex-row md:justify-evenly md:items-center `}>
        <div className=" p-10 text-5xl text-white ">
          <h1 className="uppercase">Daily Expense Tracker</h1>
        </div>
        <NavLink
          className=" p-10 hover:border-b-2 + border-red-800 +ease-in-out  no-underline text-white md:text-3xl "
          to="/login">
          LOGIN
        </NavLink>
        <NavLink
          className=" p-10 hover:border-b-2 + border-red-800 +ease-in-out no-underline text-white md:text-3xl"
          to="/signup">
          SIGNUP
        </NavLink>
      </nav>
      <div className=" box-border flex m-0 p-0 border-collapse  min-h-screen  border-2 border-red-700 ">
        <img
          className="flex-1 m-0 p-0 object-cover border-2 border-red-700 "
          src={budget}
        />
      </div>
    </>
  );
};
