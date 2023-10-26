import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../feature/Auth/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignupForm = ({ buttontype }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const state = useSelector((state) => state.auth);
  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      let name;
      let email = emailRef.current.value ? emailRef.current.value.trim() : "";
      let password = passwordRef.current.value
        ? passwordRef.current.value.trim()
        : "";

      emailRef.current.value = "";
      console.log(name, email, password);
      if (buttontype === "Signup") {
        name = nameRef.current.value ? nameRef.current.value.trim() : "";
        nameRef.current.value = "";
        if (!name) {
          alert("please fill your name");
          return;
        }
      }
      if (!email) {
        alert("please fill your email");
        return;
      }
      if (!password) {
        alert("please fill your password");
        return;
      }
      let link;
      let body;
      if (buttontype === "Signup") {
        link = "https://apiexpensetracker.onrender.com/api/v1/users";
        body = { name, email, password };
      } else {
        link = "https://apiexpensetracker.onrender.com/api/v1/users/login";
        body = {
          email,
          password,
        };
      }

      const response = await axios.post(link, body);
      console.log(response, "rrrrrrrrrrrrrrrrrrrrr", response.status);
      if (response.status === 201) {
        navigator("/login", { replace: true });
        return;
      }
      if (response.status === 200) {
        const data = response.data;
        const { token } = data;
        console.log(token);

        dispatch(login({ token, email }));
        navigator("/main", { replace: true });
      }

      emailRef.current.value = passwordRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex items-center justify-center min-h-screen min-w-full max-w-min p-4 border-4 border-yellow-300">
      <form
        onSubmit={submitHandler}
        className=" flex flex-col p-10 border-2 border-blue-900 space-y-14">
        {buttontype === "Signup" ? (
          <div className="flex space-x-2 justify-center items-center ">
            <label className="font-extrabold text-3xl font-serif ">
              UserName
            </label>
            <input
              ref={nameRef}
              type="text"
              className="  p-4 text-3xl  outline-none border-2 rounded-3xl"
              placeholder="username"
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex space-x-2 justify-center items-center ">
          <label className="font-extrabold text-3xl font-serif ">Email</label>
          <input
            ref={emailRef}
            type="text"
            className="p-4 text-3xl  outline-none border-2 rounded-3xl"
            placeholder="example@..."
          />
        </div>

        <div className="flex space-x-2 justify-center items-center ">
          <label className="font-extrabold text-3xl font-serif ">
            Password
          </label>
          <input
            ref={passwordRef}
            className="p-4 text-3xl outline-none border-2 rounded-3xl"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="flex justify-center p-4 text-3xl outline-none border-2 rounded-3xl bg-blue-800 items-center">
          <button className=" flex-1 text-3xl text-white ">{buttontype}</button>
        </div>
      </form>
    </div>
  );
};
