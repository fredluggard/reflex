import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImMail4 } from "react-icons/im";
import { FaEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

function SignUp() {
  const [render, setRender] = useState("one");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {render === "one" ? (
        <div className="flex flex-col items-center justify-between relative h-screen bg-[#FFFFFF] text-[#971B22] px-4">
          <div className="flex flex-col items-center justify-center relative top-40">
            <img src="/images/logo.png" alt="logo" />
            <p className="text-sm font-bold my-6 text-center">
              Welcome to fast, affordable emergency medical help across Enugu
            </p>
          </div>
          <div
            className="w-full flex flex-col justify-center items-center
          "
          >
            <button
              className="bg-[#971B22] border-2 border-white text-white font-bold py-2 px-4 rounded-3xl w-full my-4"
              onClick={() => setRender("two")}
            >
              sign up
            </button>
            <p className="mb-4">
              Already have an account? {""}{" "}
              <Link className="text-gray-400 hover:text-[#DC1D2D]" to="/login">
                Log in
              </Link>
            </p>
          </div>

          <p className="text-xs font-light text-center relative bottom-0 mb-2">
            By using our app, you automatically agree to our{" "}
            <span className="text-[#DC1D2D]">
              <Link to="">Privacy Policy</Link>
            </span>{" "}
            &{" "}
            <span className="text-[#DC1D2D]">
              <Link to="">Terms of service</Link>
            </span>
          </p>
        </div>
      ) : render === "two" ? (
        <div className="relative px-4 h-screen bg-[#FFFFFF]">
          <p className="py-4 text-2xl text-[#971B22] font-bold">Sign Up</p>
          <div className="flex flex-col items-center justify-center relative top-12">
            <img src="/images/logo.png" alt="logo" />
            <button className="flex justify-center items-center gap-2 bg-[#971B22] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8">
              <FaFacebook className="h-8 w-8" />
              <span className="text-sm font-light">Sign in with Facebook</span>
            </button>
            <button className="flex justify-center items-center gap-2 bg-[#971B22] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8">
              <FcGoogle className="h-8 w-8" />
              <span className="text-sm font-light">Sign in with Google</span>
            </button>
            <p className="mt-4 text-[#971B22] text-md">or sign in via email</p>
            <button
              className="flex justify-center items-center gap-2 bg-[#971B22] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8"
              onClick={() => setRender("three")}
            >
              <ImMail4 className="h-8 w-8" />
              <span className="text-sm font-light">Sign up with Email</span>
            </button>
            <p className="mt-4 text-sm text-[#971B22] text-center">
              By joining, you agree to Reflex's{" "}
              <Link to="">Terms of Service</Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] p-4 h-screen">
          <input
            className="h-10 text-md px-3 my-2 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Username"
            className="h-10 text-md px-3 my-2 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
          />
          <p className="text-sm mb-4 px-3">
            Your username will be public and you will not be able to change it.
          </p>
          <div className="flex w-full relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-10 text-md px-3 my-2 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
            />
            <span
              className="absolute text-[#971B22] text-xl right-0 top-4 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </span>
          </div>
          <p className="text-sm text-[#971B22] mb-4">
            Combine upper and lowercase letters and numbers.
          </p>
          <Link className="w-full" to="/login">
            <button className="bg-[#971B22] text-white font-bold py-2 mt-16 px-4 rounded-3xl w-full mb-4">
              Sign Up
            </button>
          </Link>
          <Link
            className="text-sm mb-4 text-[#971B22] w-full text-end opacity-70"
            to=""
          >
            Terms of Service
          </Link>
        </div>
      )}
    </div>
  );
}

export default SignUp;
