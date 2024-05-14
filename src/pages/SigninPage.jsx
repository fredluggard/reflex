import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import NavBar from "../components/NavBar";
import axios from "axios";

function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://reflex1-2.onrender.com/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("Login Successful:", response.data);
      // history.push("/");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="bg-mobile-bg bg-cover bg-center">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="relative flex flex-col justify-center items-center p-4 pt-10 h-[100vh] text-[#971B22] py-6 bg-mobile-bg">
        <div className="flex flex-col justify-center items-center relative top-4">
          <h2 className="text-2xl font-bold mt-4 mb-1">Welcome back</h2>
          <p className="text-md my-2">Sign in to continue</p>
        </div>

        <form className="relative top-10" onSubmit={handleSubmit}>
          <label className="my-1 text-md font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 text-md px-3 mb-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="my-1 mt-2 text-md font-semibold" htmlFor="password">
            Password
          </label>
          <div className="relative flex">
            <input
              className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
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
          <div className="flex mt-2 items-end justify-end">
            <Link
              className="text-sm items-end text-[#971B22] hover:text-gray-500"
              to="/resetpassword"
            >
              Forgotten password?
            </Link>
          </div>

          <button
            className="h-10 text-md text-white px-2 w-full rounded-2xl mt-20 mb-2 bg-[#971B22] border-1 border-[#971B22]"
            type="submit"
          >
            Sign In
          </button>

          <div className="flex flex-row justify-center items-center gap-2 mt-4">
            <p>Don't have an account? </p>
            <Link
              className="text-sm text-red-500 hover:text-[#971B22] text-opacity-80"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
