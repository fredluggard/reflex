import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="m-4 py-6">
      <div className="flex flex-col justify-start text-white">
        <h1 className="font-bold text-2xl">Forgot Password?</h1>
        <p className="text-sm my-6">
          Enter your email address, and we will send you a 6-digit code to reset
          yourpassword
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
  );
}

export default ResetPassword;
