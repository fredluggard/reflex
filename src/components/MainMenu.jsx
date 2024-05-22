import React, { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaPhoneAlt, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (isActive) => {
    setIsActive(isActive);
  };

  return (
    <div className="relative rounded-xl w-full flex text-md justify-center items-center px-5 py-10 text-black font-light">
      {/*container for the icons*/}
      <nav>
        <ul className="flex justify-center gap-10">
          <li className="">
            <Link
              to="#"
              onClick={() => handleClick("Home")}
              className={isActive === "Home" ? "text-[#960E20]" : ""}
            >
              <FaHome size={"25px"} className="mx-2" /> <span> Home </span>
            </Link>
          </li>

          <li>
            <Link
              to="#"
              onClick={() => handleClick("Location")}
              className={isActive === "Location" ? "text-[#960E20]" : ""}
            >
              <FaMapMarkerAlt size={"25px"} className="mx-3" />{" "}
              <span>Location</span>
            </Link>
          </li>

          <li>
            <Link
              to="#"
              onClick={() => handleClick("Call")}
              className={isActive === "Call" ? "text-[#960E20]" : ""}
            >
              <FaPhoneAlt size={"25px"} className="mx-0.2" /> <span>Call</span>
            </Link>
          </li>

          <li>
            <Link
              to="#"
              onClick={() => handleClick("Resource")}
              className={isActive === "Resource" ? "text-[#960E20]" : ""}
            >
              <FaBook size={"25px"} className="mx-4" /> <span>Resource</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;
