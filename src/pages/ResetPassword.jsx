import React, { useState } from "react";
import "../style/style.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [getCode, SetGetCode] = useState("one");
  return (
    <div className="p-4 py-6 bg-[#960E20]">
      {getCode === "one" ? (
        <div className="h-screen">
          <div className="flex flex-col justify-start text-white">
            <h1 className="font-bold text-2xl">Forgot Password?</h1>
            <p className="text-sm my-6">
              Enter your email address, and we will send you a 6-digit code to
              reset yourpassword
            </p>
          </div>
          <div>
            <form
              className="flex flex-col justify-start text-white"
              action=""
              method="post"
            >
              <label className="my-1 text-md" htmlFor="email">
                Email address
              </label>
              <input
                className="h-10 text-md px-3 outline-white w-full text-black rounded-2xl border-2 border-white"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
              />
              <input
                className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 bg-[#6B6B6B] border-1 border-white"
                type="submit"
                value="Send code"
                onClick={() => SetGetCode("two")}
              />
              <div className="flex gap-1">
                <p className="text-sm">Remember password? </p>
                <Link
                  className="text-sm text-gray-300 hover:text-white text-opacity-70"
                  to="/login"
                >
                  login
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : getCode === "two" ? (
        <div className="h-screen">
          <div className="flex flex-col justify-start text-white">
            <h1 className="font-bold text-2xl">Forgot Password?</h1>
            <p className="text-sm my-6">
              The recovery code was sent to your email address. please enter the
              code sent below
            </p>
          </div>
          <div>
            <form
              className="flex flex-col justify-start text-white"
              action=""
              method="GET"
            >
              <div className="flex flex-row gap-2 justify-center">
                <input
                  className="h-10 w-10 text-md px-3 outline-white text-black rounded-md border-2 border-gray-400"
                  type="text"
                  name="num"
                  id="num1"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-white text-black rounded-md border-2 border-gray-400"
                  type="text"
                  name="num"
                  id="num2"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-white text-black rounded-md border-2 border-gray-400"
                  type="text"
                  name="num"
                  id="num3"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-white text-black rounded-md border-2 border-gray-400"
                  type="text"
                  name="num"
                  id="num4"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-white text-black rounded-md border-2 border-gray-400"
                  type="text"
                  name="num"
                  id="num5"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-white text-black rounded-md border-2 border-gray-400"
                  type="text"
                  name="num"
                  id="num6"
                />
              </div>
              <button
                className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 bg-[#6B6B6B] border-1 border-white"
                onClick={() => SetGetCode("three")}
              >
                Recover
              </button>
              <div className="flex gap-1">
                <p className="text-sm">Didn't receive the code? </p>
                <Link
                  className="text-sm text-gray-300 hover:text-white text-opacity-70"
                  to="/login"
                >
                  Resend
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : getCode === "three" ? (
        <div className="h-screen">
          <div className="flex flex-col justify-start text-white">
            <h1 className="font-bold text-2xl">Reset Password</h1>
            <p className="text-sm my-6">Enter your new password to proceed</p>
          </div>
          <div>
            <form
              className="flex flex-col justify-start text-white"
              action=""
              method="post"
            >
              <label className="my-1 text-md" htmlFor="password">
                Password
              </label>
              <input
                className="h-10 text-md px-3 outline-white w-full text-black rounded-2xl border-2 border-white"
                type="password"
                id="password"
                name="password"
              />
              <label className="my-1 text-md" htmlFor="password1">
                Password Confirmation
              </label>
              <input
                className="h-10 text-md px-3 outline-white w-full text-black rounded-2xl border-2 border-white"
                type="password"
                id="password1"
                name="password1"
              />

              <input
                className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 bg-[#6B6B6B] border-1 border-white"
                type="submit"
                value="Reset password"
                onClick={() => SetGetCode("four")}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen justify-between text-white">
          <div className="flex flex-col justify-center items-center">
            <FaRegCircleCheck className="h-[150px] w-[150px] my-6" />
            <h1 className="font-bold text-2xl">Password Reset Successful</h1>
            <p className="text-md my-6 opacity-60 text-center">
              You have successfully reset your password, Please log into your
              account with new password and email address
            </p>
          </div>
          <Link to="/login">
            <button className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 bg-[#6B6B6B] text-white border-1 border-white">
              sign in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
