import React, { useState } from "react";
import "../style/style.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import NavBar from "../components/NavBar";

function ResetPassword() {
  const [getCode, SetGetCode] = useState("one");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-4 py-6 bg-[#FFFFFF]">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      {getCode === "one" ? (
        <div className="h-screen">
          <div className="flex flex-col justify-start text-[#971B22]">
            <h1 className="font-bold text-2xl">Forgot Password?</h1>
            <p className="text-sm my-6">
              Enter your email address, and we will send you a 6-digit code to
              reset yourpassword
            </p>
          </div>
          <div>
            <form
              className="flex flex-col justify-start text-[#971B22]"
              action=""
              method="post"
            >
              <input
                className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="h-10 text-md px-2 w-full rounded-2xl my-5 text-white bg-[#971B22] border-[1px] border-[#971B22]"
                type="submit"
                value="Send code"
                onClick={() => SetGetCode("two")}
              />
              <div className="flex gap-1">
                <p className="text-sm">Remember password? </p>
                <Link
                  className="text-sm text-[#971B22] hover:text-gray-800 text-opacity-80"
                  to="/login"
                >
                  login
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : getCode === "two" ? (
        <div className="h-screen text-[#971B22] bg-[#FFFFFF]">
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl">Forgot Password?</h1>
            <p className="text-sm my-6">
              The recovery code was sent to your email address. please enter the
              code sent below
            </p>
          </div>
          <div>
            <form
              className="flex flex-col justify-start"
              action=""
              method="GET"
            >
              <div className="flex flex-row gap-2 justify-center">
                <input
                  className="h-10 w-10 text-md px-3 outline-[#971B22] text-black rounded-md border-[1px] border-[#971B22]"
                  type="text"
                  name="num"
                  id="num1"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-[#971B22] text-black rounded-md border-[1px] border-[#971B22]"
                  type="text"
                  name="num"
                  id="num2"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-[#971B22] text-black rounded-md border-[1px] border-[#971B22]"
                  type="text"
                  name="num"
                  id="num3"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-[#971B22] text-black rounded-md border-[1px] border-[#971B22]"
                  type="text"
                  name="num"
                  id="num4"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-[#971B22] text-black rounded-md border-[1px] border-[#971B22]"
                  type="text"
                  name="num"
                  id="num5"
                />
                <input
                  className="h-10 w-10 text-md px-3 outline-[#971B22] text-black rounded-md border-[1px] border-[#971B22]"
                  type="text"
                  name="num"
                  id="num6"
                />
              </div>
              <button
                className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 text-white bg-[#971B22] border-2 border-[#971B22]"
                onClick={() => SetGetCode("three")}
              >
                Recover
              </button>
              <div className="flex gap-1">
                <p className="text-sm">Didn't receive the code? </p>
                <Link
                  className="text-sm text-[#971B22] hover:text-gray-700 text-opacity-60"
                  to=""
                >
                  Resend
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : getCode === "three" ? (
        <div className="h-screen text-[#971B22] bg-[#FFFFFF]">
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl">Reset Password</h1>
            <p className="text-sm my-6">Enter your new password to proceed</p>
          </div>
          <div>
            <form
              className="flex flex-col justify-start"
              onSubmit={handleSubmit}
            >
              <label className="my-1 text-md" htmlFor="password">
                Password
              </label>
              <div className="relative flex">
                <input
                  className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="text-[#971B22] absolute right-5 top-3"
                  type="button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>
              <label className="my-1 text-md" htmlFor="password1">
                Password Confirmation
              </label>
              <div className="relative flex">
                <input
                  className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
                  type={showPassword2 ? "text" : "password"}
                  id="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <button
                  className="text-[#971B22] absolute right-5 top-3"
                  type="button"
                  onClick={handleTogglePassword2}
                >
                  {showPassword2 ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>

              <input
                className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 text-white bg-[#971B22] border-2 border-[#971B22]"
                type="submit"
                value="Reset password"
                onClick={() => SetGetCode("four")}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen justify-between bg-[#FFFFFF] text-[#971B22]">
          <div className="flex flex-col justify-center items-center">
            <FaRegCircleCheck className="h-[150px] w-[150px] my-6" />
            <h1 className="font-bold text-2xl">Password Reset Successful</h1>
            <p className="text-md font-semibold my-6 opacity-60 text-center">
              You have successfully reset your password, Please log into your
              account with new password and email address
            </p>
          </div>

          <button className="h-10 text-md px-2 w-full rounded-2xl bg-[#971B22] text-white border-1 border-white">
            <Link to="/login">sign in</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
