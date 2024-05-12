import React from "react";
import "../style/style.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header className="px-6 pt-24 pb-4 border-b text-white border-white md:px-20 py-4">
        <nav className="flex items-center justify-between text-lg ">
          <img src="/images/logo.png" width="100" alt="" />
          <ul className="hidden md:flex space-x-20">
            <li className="text-red-600">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-gray-900">
              <NavLink to="/serviceprovider" className="flex items-center">
                Service provider
              </NavLink>
            </li>
            <li className="text-gray-900">
              <NavLink to="/resources" className="flex items-center">
                Information resources
              </NavLink>
            </li>
            <li className="text-gray-900">
              <NavLink to="/tracking" className="flex items-center">
                Realtime tracking
              </NavLink>
            </li>
          </ul>
          <div className="flex">
            <ul className="flex space-x-10">
              <li className="text-gray-900 border border-red-800 px-6 py-2 rounded-3xl">
                <NavLink to="/login">
                Log in
                </NavLink>
              </li>
              <li className="bg-red-800 px-4 py-2 rounded-3xl">
                <NavLink to="/signup">
                Sign up
                </NavLink>
              </li>
            </ul>
            {/*<NavLink to="/userprofile">
              <img
              src="/images/user-profile-pic.png"
              alt="user-profile-pic"
              className="flex self-end"
              />
            </NavLink>*/}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
