import React from "react";
import "../style/otherHotlines.css";
import ambulance from "../images/hotlineImages/ambulance.svg";
import fireservice from "../images/hotlineImages/fireService.svg";
import police from "../images/hotlineImages/police.svg";
import plusIcon from "../images/hotlineImages/plusIcon.svg";
import { Link } from "react-router-dom";
function HomepageHotlines() {
  return (
    <>
      <div className="hp-hotlines">
        <div className="ambulance">
          <div className="img-div">
            <img
              src={ambulance}
              alt="ambulance"
              style={{ position: "relative", left: "5px", top: "5px" }}
            />
          </div>
          <p>Ambulance</p>
        </div>
        <div className="ambulance">
          <div className="img-div">
            <img
              src={fireservice}
              alt="fireservice"
              style={{ position: "relative", left: "5px", top: "5px" }}
            />
          </div>
          <p>Fire Service</p>
        </div>
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
      </div>
    </>
  );
}

export default HomepageHotlines;
