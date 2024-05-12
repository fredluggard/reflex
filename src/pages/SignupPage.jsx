import React from "react";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar";

function SignupPage() {
  return (
    <div className="p-4 py-6 h-screen bg-[#FFFFFF]">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <SignUp />
    </div>
  );
}

export default SignupPage;
