import React, { useRef } from "react";

export const SignupForm = ({ buttontype }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    let name = nameRef.current.value ? nameRef.current.value.trim() : "";
    let email = emailRef.current.value ? emailRef.current.value.trim() : "";
    let password = passwordRef.current.value
      ? passwordRef.current.value.trim()
      : "";
    if (!name) {
      alert("please fill your name");
      return;
    }
    if (!email) {
      alert("please fill your email");
      return;
    }
    if (!password) {
      alert("please fill your password");
      return;
    }
    console.log(name, email, password);
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
          <button className="text-3xl text-white ">{buttontype}</button>
        </div>
      </form>
    </div>
  );
};
