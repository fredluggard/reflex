import React, { useState } from "react";
import "../style/style.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ImageCarousel from "../components/ImageCarousel";

function ConfirmReset() {
  const img1 = "images/signup-1.png";
  const img2 = "images/signup-2.png";
  const img3 = "images/signup-3.png";

  const [getCode, SetGetCode] = useState("one");
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
    <div>
      {getCode === "one" ? (
        <div className="flex w-full items-center justify-center md:px-12">
          <div className="w-full px-4 md:w-[50%] text-[#971B22] md:text-black py-10">
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
                  onClick={() => SetGetCode("two")}
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
  );
}

export default ConfirmReset;
