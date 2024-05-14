import React from "react";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar";

function SignupPage() {
  return (
    <div className="h-screen bg-mobile-bg">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <SignUp />
    </div>
  );
}

export default SignupPage;
