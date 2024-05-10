import React from "react";
import "../style/style.css";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <header className="px-6 pt-24 pb-4 border-b text-white border-white md:px-20 py-4">
        <nav className="flex items-center justify-between ">
          <h1 className="text-4xl font-semibold">RefleX</h1>
          <ul className="hidden md:flex space-x-20 font-light">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/location" className="flex items-center">
                Location <FaAngleDown />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="flex items-center">
                Contacts <FaAngleDown />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className="flex items-center">
                Resources <FaAngleDown />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotlines" className="flex items-center">
                Hotlines <FaAngleDown />{" "}
              </NavLink>
            </li>
          </ul>
          <NavLink to="/userprofile">
            <img
              src="/images/user-profile-pic.png"
              alt="user-profile-pic"
              className="flex self-end"
            />
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
