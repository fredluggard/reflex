import React, { useState } from "react";
import "../style/style.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div>
      <header className="px-12 pb-4 pt-8 border-b text-white ">
        <nav className="flex items-center justify-between">
          <img src="/images/logo.png" width="85" alt="logo" />
          <ul className="hidden md:flex space-x-20 text-black">
            <li>
              <NavLink
                to="/"
                onClick={() => handleLinkClick("Home")}
                className={`hover:text-[#971B22] ${
                  activeLink === "Home" ? "text-[#971B22]" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/serviceproviders"
                onClick={() => handleLinkClick("ServiceProvider")}
                className={`hover:text-[#971B22] ${
                  activeLink === "ServiceProvider" ? "text-[#971B22]" : ""
                }`}
              >
                Service provider
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                onClick={() => handleLinkClick("Resources")}
                className={`hover:text-[#971B22] ${
                  activeLink === "Resources" ? "text-[#971B22]" : ""
                }`}
              >
                Information resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tracking"
                onClick={() => handleLinkClick("Tracking")}
                className={`hover:text-[#971B22] ${
                  activeLink === "Tracking" ? "text-[#971B22]" : ""
                }`}
              >
                Realtime tracking
              </NavLink>
            </li>
          </ul>
          <div className="flex">
            <ul className="hidden md:flex space-x-10">
              <li className="text-black border border-[#971B22] px-6 py-2 rounded-3xl hover:bg-[#971B22] hover:text-white transition duration-300">
                <NavLink
                  to="/login"
                  onClick={() => handleLinkClick("Login")}
                  className={activeLink === "Login" ? "text-[#971B22]" : ""}
                >
                  Log in
                </NavLink>
              </li>
              <li className="bg-red-800 px-4 py-2 rounded-3xl hover:bg-white hover:text-[#971B22] transition duration-300">
                <NavLink
                  to="/signup"
                  onClick={() => handleLinkClick("Sign up")}
                  className={activeLink === "Sign up" ? "text-[#971B22]" : ""}
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
            <NavLink to="/userprofile">
              <img
                src="/images/user-profile-pic.png"
                width="30"
                alt="user-profile-pic"
                className="flex self-end md:hidden"
              />
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="border"></div>
    </div>
  );
}

export default NavBar;
