import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImMail4 } from "react-icons/im";
import { FaEyeSlash } from "react-icons/fa6";

function SignUp() {
  const [render, setRender] = useState("one");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {render === "one" ? (
        <div className="flex flex-col items-center justify-center h-screen bg-[#960E20] text-white m-4">
          <h1 className="text-3xl font-bold mb-4">REFLEX</h1>
          <p className="text-lg mb-8">
            Welcome to fast, affordable emergency medical help across Enugu
          </p>
          <button
            className="bg-[#9E454D] border-2 border-white text-white font-bold py-2 px-4 rounded-3xl w-full mb-4"
            onClick={() => setRender("two")}
          >
            Sign Up
          </button>
          <p className="mb-4">
            Already have an account?{" "}
            <a href="#" className="text-ash">
              Log in
            </a>
          </p>
        </div>
      ) : render === "two" ? (
        <div>
          <p className="mt-8 ml-4">Sign Up</p>
          <div className="flex items-center justify-center h-screen">
          <div>
          <h1 className="text-3xl font-bold mt-8">REFLEX</h1>
          <button className="flex items-center bg-[#9E454D] text-white font-bold py-2 px-4 rounded-3xl w-full mt-8">
            <FaFacebook />
            <span className="text-sm">Sign in with Facebook</span>
          </button>
          <button className="flex items-center bg-[#9E454D] text-white font-bold py-2 px-4 rounded-3xl w-full mt-4">
          <FcGoogle />
            <span className="text-sm">Sign in with Google</span>
          </button>
          <p className="mt-4 text-sm">or sign in via email</p>
          <button
            className="flex items-center bg-[#9E454D] text-white font-bold py-2 px-4 rounded-3xl w-full mt-2"
            onClick={() => setRender("three")}
          >
            <ImMail4 />
            <span className="text-sm">Sign up with Email</span>
          </button>
          <p className="mt-4 text-sm">
            By joining, you agree to Reflex’s{" "}
            <a href="#" className="text-blue-500">
              Terms of Service
            </a>
          </p>
          </div>
        </div>
        </div>
      ) : (
        <div>
          <h4 className="text-lg font-bold mb-4">Sign up with Email</h4>
          <input
            type="email"
            placeholder="Email"
            className="bg-[#FFFFFF] text-white rounded-3xl w-full px-4 py-2 w-64 mb-4"
          />
          <input
            type="text"
            placeholder="Username"
            className="bg-[#FFFFFF] text-white rounded-3xl w-full px-4 py-2 w-64 mb-4"
          />
          <p className="text-sm mb-4">
            Your username will be public and you will not be able to change it.
          </p>
          <div className="relative w-64 mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-[#FFFFFF] text-white rounded-3xl w-full px-4 py-2 w-64  mb-4"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEyeSlash />
              )}
            </span>
          </div>
          <p className="text-sm mb-4">
            Combine upper and lowercase letters and numbers.
          </p>
          <button className="bg-[#6B6B6B] text-white font-bold py-2 px-4 rounded-3xl w-full mb-4">
            <Link to="/login">Sign Up</Link>
          </button>
          <p className="text-sm mb-4">
            By joining, you agree to Reflex's{" "}
            <a href="#" className="text-blue-500">
              Terms of Service
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;