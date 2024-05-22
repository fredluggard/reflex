import React from "react";
import ambulance from "../images/hotlineImages/AmbulanceCross.svg";
import fireservice from "../images/hotlineImages/fireService.svg";
import police from "../images/hotlineImages/police.svg";
import plusIcon from "../images/hotlineImages/plusIcon.svg";
import { Link } from "react-router-dom";
function HomepageHotlines() {

  const widthSize = window.innerWidth;
  return (
    <>
      <div className="md:hidden border-2 sm:flex sm:justify-center sm:gap-0">
        <div className="flex gap-x-6 relative">
          <a
            href={widthSize >=768 ? "#" : "tel:+234067157635"}
          className="flex flex-col flex-wrap justify-center items-center text-center ">
            <div className="border-2 border-[#DC1D2DE6] rounded-full h-24 w-24 flex justify-center items-center">
              <img className="w-20 h-20" src={ambulance} alt="Ambulance" />
            </div>
            <span className="w-24">Ambulance</span>
          </a>
          <a 
          href={widthSize >= 768 ? "#" : "tel:+2347065409291"}
          className="flex flex-col flex-wrap justify-center items-center text-center  ">
            <div className="border-2 border-[#DC1D2DE6] rounded-full h-24 w-24 flex justify-center items-center">
              <img className="w-20 h-20" src={fireservice} alt="Fire Service" />
            </div>
            <span className="w-24">Fire Service</span>
          </a>
          <a 
          href={widthSize >= 768 ? "#" : "+2348032003702"}
          className="flex flex-col flex-wrap justify-center items-center text-center  ">
            <div className="border-2 border-[#DC1D2DE6] rounded-full h-24 w-24 flex justify-center items-center">
              <img className="w-20 h-20" src={police} alt="Police" />
            </div>
            <span className="w-24">Police</span>
          </a>
        </div>
        <div className=" shadow-md bg-white rounded-l-full w-16 h-14 absolute right-0 top-6 flex items-center justify-center">
          <Link to="emergencyhotlines">
            <img src={plusIcon} alt="add" />
          </Link>
        </div>
<<<<<<< HEAD
        <div className="ambulance">
          <div className="img-div">
            <img
              src={police}
              alt="police"
              style={{ position: "relative", left: "5px", top: "5px" }}
            />
          </div>
          <p>Police</p>
        </div>
      </div>
      <div className="plus-icon">
        <Link to="#">
          <img
            src={plusIcon}
            alt="add"
            style={{ position: "relative", left: "20px", top: "10px" }}
        
          />
        </Link>
=======
>>>>>>> 8f05a1e1f5e3019b804e1e434586d5d19335ab85
      </div>
    </>
  );
}

export default HomepageHotlines;
