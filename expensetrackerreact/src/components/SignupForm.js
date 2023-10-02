import React from "react";

export const SignupForm = ({ buttontype }) => {
  return (
    <div className=" flex items-center justify-center min-h-screen min-w-full max-w-min p-4 border-4 border-yellow-300">
      <form className=" flex flex-col p-10 border-2 border-blue-900 space-y-14">
        <div className="flex space-x-2 justify-center items-center ">
          <label className="font-extrabold text-3xl font-serif ">
            UserName
          </label>
          <input
            type="text"
            className="p-4 text-3xl  outline-none border-2 rounded-3xl"
            placeholder="username"
          />
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <label className="font-extrabold text-3xl font-serif ">
            Password
          </label>
          <input
            className="p-4 text-3xl outline-none border-2 rounded-3xl"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="text-3xl">{buttontype}</button>
        </div>
      </form>
    </div>
  );
};
