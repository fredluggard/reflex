import React, { useState } from "react";
import "../style/style.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ImageCarousel from "../components/ImageCarousel";

function ResetPassword() {
  const img1 = "images/signup-1.png";
  const img2 = "images/signup-2.png";
  const img3 = "images/signup-3.png";

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
    <div className="h-[100vh]">
      <nav className="hidden md:block px-12 my-4">
        <img
          src="/images/logo.png"
          width={"100px"}
          height={"100px"}
          alt="logo"
        />
      </nav>
      <div className="flex justify-center items-center w-full bg-mobile-bg">
        {getCode === "one" ? (
          <div className="flex w-full items-center justify-center px-4 md:px-12">
            <div className="md:w-[50%] py-10">
              <div className="w-[70%] flex flex-col justify-start text-[#971B22] md:text-black">
                <h1 className="font-bold text-2xl">Forgot Password</h1>
                <p className="text-sm my-6">
                  Enter your email address, and we will send you a 6-digit code
                  to reset your password
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col justify-start text-[#971B22]"
                  action=""
                  method="post"
                >
                  <input
                    className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22] md:bg-[#e6e7e9] md:border-[#e6e7e9] md:border-2 md:outline-[#B33625] md:px-2 md:mb-4 md:rounded-md md:h-12 md:w-[80%]"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    className="h-10 text-md px-2 w-full rounded-2xl my-5 text-white bg-[#971B22] border-[1px] border-[#971B22] md:h-12 md:w-[80%] md:text-white md:bg-[#B33625] md:rounded-xl"
                    type="submit"
                    value="Send code"
                    onClick={() => SetGetCode("two")}
                  />
                  <div className="flex gap-1">
                    <p className="text-sm md:text-black">Remember password? </p>
                    <Link
                      className="text-sm text-[#971B22] hover:text-gray-800 text-opacity-80"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block md:w-[50%]">
              <ImageCarousel img1={img1} img2={img2} img3={img3} />
            </div>
          </div>
        ) : getCode === "two" ? (
          <div className="flex w-full items-center justify-center px-4 md:px-12">
            <div className="md:w-[50%] text-[#971B22] md:text-black py-10">
              <div className="flex flex-col justify-start">
                <h1 className="font-bold text-2xl">Forgot Password?</h1>
                <p className="text-sm my-6">
                  The recovery code was sent to your email address. please enter
                  the code sent below
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col justify-start"
                  action=""
                  method="GET"
                >
                  <div className="flex flex-row gap-2 justify-center md:w-[80%]">
                    <input
                      className="h-10 w-10 text-md px-3 outline-[#971B22] md:outline-[#B33625] text-black rounded-md border-[1px] border-[#971B22] md:border-[#B33625]"
                      type="text"
                      name="num"
                      id="num1"
                    />
                    <input
                      className="h-10 w-10 text-md px-3 outline-[#971B22] md:outline-[#B33625] text-black rounded-md border-[1px] border-[#971B22] md:border-[#B33625]"
                      type="text"
                      name="num"
                      id="num2"
                    />
                    <input
                      className="h-10 w-10 text-md px-3 outline-[#971B22] md:outline-[#B33625] text-black rounded-md border-[1px] border-[#971B22] md:border-[#B33625]"
                      type="text"
                      name="num"
                      id="num3"
                    />
                    <input
                      className="h-10 w-10 text-md px-3 outline-[#971B22] md:outline-[#B33625] text-black rounded-md border-[1px] border-[#971B22] md:border-[#B33625]"
                      type="text"
                      name="num"
                      id="num4"
                    />
                    <input
                      className="h-10 w-10 text-md px-3 outline-[#971B22] md:outline-[#B33625] text-black rounded-md border-[1px] border-[#971B22] md:border-[#B33625]"
                      type="text"
                      name="num"
                      id="num5"
                    />
                    <input
                      className="h-10 w-10 text-md px-3 outline-[#971B22] md:outline-[#B33625] text-black rounded-md border-[1px] border-[#971B22] md:border-[#B33625]"
                      type="text"
                      name="num"
                      id="num6"
                    />
                  </div>
                  <button
                    className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 md:mb-4 text-white bg-[#971B22] border-2 border-[#971B22] md:border-[#B33625] md:h-12 md:w-[80%] md:text-white md:bg-[#B33625] md:rounded-xl"
                    onClick={() => SetGetCode("three")}
                  >
                    Recover
                  </button>
                  <div className="flex gap-1">
                    <p className="text-sm">Didn't receive the code? </p>
                    <Link
                      className="text-sm text-[#971B22] md:text-[#B33625] text-opacity-70"
                      to=""
                    >
                      Resend
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block md:w-[50%]">
              <ImageCarousel img1={img1} img2={img2} img3={img3} />
            </div>
          </div>
        ) : getCode === "three" ? (
          <div className="flex w-full items-center justify-center md:px-12">
            <div className="w-full px-4 md:w-[50%] text-[#971B22] md:text-black py-10">
              <div className="flex flex-col justify-start">
                <h1 className="font-bold text-2xl">Reset Password</h1>
                <p className="text-sm my-6">
                  Enter your new password to proceed
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col justify-start"
                  onSubmit={handleSubmit}
                >
                  <label className="my-1 text-md" htmlFor="password">
                    Password
                  </label>
                  <div className="relative flex md:w-[80%]">
                    <input
                      className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22] md:bg-[#e6e7e9] md:border-[#e6e7e9] md:border-2 md:outline-[#B33625] md:px-2 md:mb-4 md:rounded-md md:h-12 md:w-full"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="* * * * * * * *"
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
                  <div className="relative flex md:w-[80%]">
                    <input
                      className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22] md:bg-[#e6e7e9] md:border-[#e6e7e9] md:border-2 md:outline-[#B33625] md:px-2 md:mb-4 md:rounded-md md:h-12 md:w-full"
                      type={showPassword2 ? "text" : "password"}
                      id="password"
                      placeholder="* * * * * * * *"
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
                    className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 text-white bg-[#971B22] border-2 border-[#971B22] md:border-[#B33625] md:h-12 md:w-[80%] md:text-white md:bg-[#B33625] md:rounded-xl"
                    type="submit"
                    value="Reset password"
                    onClick={() => SetGetCode("four")}
                  />
                </form>
              </div>
            </div>
            <div className="hidden md:block md:w-[50%]">
              <ImageCarousel img1={img1} img2={img2} img3={img3} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col px-4 md:w-[30%] justify-around text-[#971B22] md:text-[#B33625]">
            <div className="flex flex-col justify-center items-center">
              <FaRegCircleCheck className="h-[150px] w-[150px] my-6" />
              <h1 className="font-bold text-center text-2xl">
                Password Reset Successful
              </h1>
              <p className="text-md font-semibold my-6 opacity-70 text-center">
                You have successfully reset your password, Please log into your
                account with new password and email address
              </p>
            </div>
            <Link className="w-full" to="/login">
              <button className="h-10 text-md px-2 w-full rounded-2xl bg-[#971B22] md:bg-[#B33625] text-white border-1 border-white">
                sign in
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
