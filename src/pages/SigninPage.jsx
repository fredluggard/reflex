import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import NavBar from "../components/NavBar";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative p-4 pt-10 h-screen text-white py-6 bg-[#960E20]">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="flex flex-col justify-center items-center relative top-4">
        <h1 className="text-5xl font-extrabold">RefleX</h1>
        <h2 className="text-xl font-semibold mt-4 mb-1">Welcome back</h2>
        <p className="text-sm">Sign in to continue</p>
      </div>

      <form className="relative top-10" onSubmit={handleSubmit}>
        <label className="my-1 text-md" htmlFor="email">
          Email
        </label>
        <input
          className="h-10 text-md px-3 mb-3 outline-white w-full text-black rounded-2xl border-2 border-white"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="my-1 text-md" htmlFor="password">
          Password
        </label>
        <div className="relative flex">
          <input
            className="h-10 text-md px-3 outline-white w-full text-black rounded-2xl border-2 border-white"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="text-black absolute right-5 top-3"
            type="button"
            onClick={handleTogglePassword}
          >
            {showPassword ? <FaRegEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="flex mt-2 items-end justify-end">
          <Link
            className="text-sm items-end text-white hover:text-gray-300"
            to="/resetpassword"
          >
            Forgotten password?
          </Link>
        </div>

        <button
          className="h-10 text-md px-2 w-full rounded-2xl mt-20 mb-2 bg-[#6B6B6B] border-1 border-white"
          type="submit"
        >
          Sign In
        </button>

        <div className="flex flex-row justify-center items-center gap-2 mt-4">
          <p>Don't have an account? </p>
          <Link
            className="text-sm text-gray-300 hover:text-white text-opacity-70"
            to="/signup"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SigninPage;
