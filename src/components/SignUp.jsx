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
        <div className="flex flex-col items-center justify-between relative h-screen bg-[#960E20] text-white mx-4">
          <div className="flex flex-col items-center justify-center relative top-40">
            <h1 className="text-5xl font-extrabold ">RefleX</h1>
            <p className="text-sm font-light my-6 text-center">
              Welcome to fast, affordable emergency medical help across Enugu
            </p>
          </div>
          <div>
            <button
              className="bg-[#9E454D] border-2 border-white text-white font-bold py-2 px-4 rounded-3xl w-full my-4"
              onClick={() => setRender("two")}
            >
              sign up
            </button>
            <p className="mb-4">
              Already have an account? {""}{" "}
              <Link className="text-gray-400 hover:text-white" to="/login">
                Log in
              </Link>
            </p>
          </div>

          <p className="text-xs font-light text-center relative bottom-0 mb-2">
            By using our app, you automatically agree to our{" "}
            <span className="">
              <Link to="">Privacy Policy</Link>
            </span>{" "}
            &{" "}
            <span className="">
              <Link to="">Terms of service</Link>
            </span>
          </p>
        </div>
      ) : render === "two" ? (
        <div className="px-4 h-screen">
          <p className="py-4 text-2xl font-bold">Sign Up</p>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold mt-8">REFLEX</h1>
            <button className="flex justify-center items-center gap-2 bg-[#9E454D] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8">
              <FaFacebook className="h-8 w-8" />
              <span className="text-md">Sign in with Facebook</span>
            </button>
            <button className="flex justify-center items-center gap-2 bg-[#9E454D] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8">
              <FcGoogle className="h-8 w-8" />
              <span className="text-sm">Sign in with Google</span>
            </button>
            <p className="mt-4 text-sm">or sign in via email</p>
            <button
              className="flex justify-center items-center gap-2 bg-[#9E454D] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8"
              onClick={() => setRender("three")}
            >
              <ImMail4 className="h-8 w-8" />
              <span className="text-sm">Sign up with Email</span>
            </button>
            <p className="mt-4 text-sm">
              By joining, you agree to Reflex’s{" "}
              <Link to="">Terms of Service</Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-4 h-screen">
          <input
            className="h-10 text-md px-3 my-2 outline-white w-full text-black rounded-2xl border-2 border-white"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Username"
            className="h-10 text-md px-3 my-2 outline-white w-full text-black rounded-2xl border-2 border-white"
          />
          <p className="text-sm mb-4 px-3">
            Your username will be public and you will not be able to change it.
          </p>
          <div className="flex w-full relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-10 text-md px-3 my-2 outline-white w-full text-black rounded-2xl border-2 border-white"
            />
            <span
              className="absolute text-black text-xl right-0 top-4 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </span>
          </div>
          <p className="text-sm mb-4">
            Combine upper and lowercase letters and numbers.
          </p>
          <button className="bg-[#6B6B6B] text-white font-bold py-2 mt-16 px-4 rounded-3xl w-full mb-4">
            <Link to="/login">Sign Up</Link>
          </button>
          <p className="text-sm mb-4">
            By joining, you agree to Reflex's{" "}
            <Link to="">Terms of Service</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
