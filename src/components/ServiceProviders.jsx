import React from "react";
import frsc from "../images/hotlineImages/frsc.svg";
import sss from "../images/hotlineImages/ssService.svg";
import ncc from "../images/hotlineImages/ncc.svg";
import ndlea from "../images/hotlineImages/ndlea.svg";
import eswama from "../images/hotlineImages/eswama.svg";
import erAfrica from "../images/hotlineImages/erAfrica.svg";
import ambulance from "../images/hotlineImages/ambulance.svg";
import fireService from "../images/hotlineImages/fireService.svg";
import police from "../images/hotlineImages/police.svg";
import { useState } from "react";
import NavBar from "./NavBar";

function ServiceProviders() {
  const [serviceName, setServiceName] = useState("");

  const handleButton = (imageName) => {
    setServiceName(imageName);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-x-0 sm:gap-y-20 h-auto w-auto  text-[#B33625]">
          <button
            onClick={() => handleButton("ambulance")}
            className={
              serviceName === "ambulance"
                ? "hidden sm:block sm:bg-red-300 sm:text-black rounded-3xl cursor-pointer"
                : "hidden sm:block cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "ambulance"
                    ? "shadow-md sm:shadow-none h-24 w-24 flex justify-center items-center                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
                    : " shadow-md sm:shadow-none sm:border-2 sm:border-red-700 sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img
                  className="w-16 h-20 sm:w-20 sm:h-20 "
                  src={ambulance}
                  alt="Ambulance"
                />
              </div>
              <span className=" w-24 text-base">Ambulance</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("fireService")}
            className={
              serviceName === "fireService"
                ? "hidden sm:block bg-red-300 rounded-3xl text-black"
                : "hidden sm:block"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center">
              <div
                className={
                  serviceName === "fireService"
                    ? "border-0"
                    : "border-2 border-red-700 rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img
                  className="w-20 h-20"
                  src={fireService}
                  alt="Fire Service"
                />
              </div>
              <span className="w-24 text-base text-[#B33625]">
                Fire Service
              </span>
            </div>
          </button>

          <button
            onClick={() => handleButton("police")}
            className={
              serviceName === "police"
                ? "hidden sm:block sm:bg-red-300 sm:text-black sm:rounded-3xl"
                : "hidden sm:block"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center  ">
              <div
                className={
                  serviceName === "police"
                    ? " shadow-md sm:shadow-none border-0 h-24 w-24"
                    : " shadow-md sm:shadow-none sm:border-2 sm:border-red-700 sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={police} alt="Police" />
              </div>
              <span className="w-24">Police</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("frsc")}
            className={
              serviceName === "frsc" ? "sm:bg-red-300 sm:text-black sm:rounded-3xl sm:mr-4 cursor-pointer" : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "frsc"
                    ? "shadow-md  bg-white sm:shadow-none h-24 w-24 border-0 rounded-3xl flex justify-center items-center"
                    : "shadow-md  bg-white sm:shadow-none sm:border-2 sm:border-red-700 rounded-3xl sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={frsc} alt="FRSC" />
              </div>
              <span className="w-24">FRSC</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("sss")}
            className={
              serviceName === "sss" ? "sm:bg-red-300 sm:text-black sm:rounded-3xl cursor-pointer" : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center sm:-ml-3">
              <div
                className={
                  serviceName === "sss"
                    ? "shadow-md  bg-white sm:shadow-none border-0 h-24 w-24 rounded-3xl flex justify-center items-center"
                    : "shadow-md  bg-white sm:shadow-none sm:border-2 sm:border-red-700 rounded-3xl sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={sss} alt="SSS" />
              </div>
              <span
                className={
                  serviceName === "sss"
                    ? "w-24 sm:w-36 sm:text-sm sm:font-light sm:pl-3"
                    : "w-24 sm:w-36 "
                }
              >
                State Sec. Service
              </span>
            </div>
          </button>
          <button
            onClick={() => handleButton("ncc")}
            className={
              serviceName === "ncc" ? "sm:bg-red-300 sm:text-black rounded-3xl cursor-pointer" : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "ncc"
                    ? "shadow  bg-white sm:shadow-none border-0 h-24 w-24 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white sm:shadow-none sm:border-2 sm:border-red-700 rounded-3xl sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={ncc} alt="NCC" />
              </div>
              <span className="w-24">NCC</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("ndlea")}
            className={
              serviceName === "ndlea" ? "sm:bg-red-300 sm:text-black sm:rounded-3xl cursor-pointer" : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center">
              <div
                className={
                  serviceName === "ndlea"
                    ? "shadow  bg-white sm:shadow-none border-0 h-24 w-24 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white sm:shadow-none sm:border-2 sm:border-red-700 rounded-3xl sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={ndlea} alt="NDLEA" />
              </div>
              <span className="w-24">NDLEA</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("eswama")}
            className={
              serviceName === "eswama"
                ? "sm:bg-red-300 sm:text-black sm:rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "eswama"
                    ? "shadow  bg-white sm:shadow-none h-24 w-24 border-0 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white sm:shadow sm:border-2 sm:border-red-700 rounded-3xl sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={eswama} alt="ESWAMA" />
              </div>
              <span className="w-24">ESWAMA</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("erAfrica")}
            className={
              serviceName === "erAfrica"
                ? "sm:bg-red-300 sm:text-black sm:rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "erAfrica"
                    ? "shadow  bg-white sm:shadow-none h-24 w-24  border-0 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white sm:shadow-none sm:border-2 sm:border-red-700 rounded-3xl sm:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={erAfrica} alt="erAfrica" />
              </div>
              <span>E.R Africa</span>
            </div>
          </button>
        </div>
        <div
          className={
            serviceName === "ambulance" ? " hidden sm:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div
            className={
              serviceName === "ambulance" ? "pl-20" : "hidden"
            }
          >
            <span className="block">Memphis Ambulance Response Team</span>
            <span className="text-[#B33625]">Contact: +234067157635</span>
          </div>
        </div>
        <div
          className={
            serviceName === "fireService" ? "hidden sm:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "fireService" ? "pl-20" : "hidden"}>
            <span className="block">Enugu State Fire Service</span>
            <span className="text-[#B33625]">Contact: +2347065409291</span>
          </div>
        </div>
        <div
          className={
            serviceName === "police" ? " hidden sm:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "police" ? "pl-20" : "hidden"}>
            <span className="block">Police</span>
            <span className="text-[#B33625]">Contact: +2348032003702</span>
          </div>
        </div>
        <div className={serviceName === "frsc" ? "hidden sm:block w-5/12" : "hidden"}>
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "frsc" ? "pl-20" : "hidden"}>
            <span className="block">Federal Road Safety Corp</span>
            <span className="text-[#B33625]">Contact: 122</span>
          </div>
        </div>
        <div className={serviceName === "sss" ? "hidden sm:block w-5/12" : "hidden"}>
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "sss" ? "pl-20" : "hidden"}>
            <span className="block">State Security Service</span>
            <span className="text-[#B33625]">Contact: +2348132222105</span>
          </div>
        </div>
        <div className={serviceName === "ncc" ? "hidden sm:block w-5/12" : "hidden"}>
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "ncc" ? "pl-20" : "hidden"}>
            <span className="block">Nigerian Communications Commision</span>
            <span className="text-[#B33625]">Contact: 112</span>
          </div>
        </div>
        <div
          className={serviceName === "ndlea" ? "hidden sm:block w-5/12" : "hidden"}
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "ndlea" ? "pl-20" : "hidden"}>
            <span className="block">National Drug Law Enforcement Agency</span>
            <span className="text-[#B33625]">Contact: +234803347868</span>
          </div>
        </div>
        <div
          className={serviceName === "eswama" ? "hidden sm:block w-5/12" : "hidden"}
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "eswama" ? "pl-20" : "hidden"}>
            <span className="block">
              Enugu State Waste Management Authority
            </span>
            <span className="text-[#B33625]">Contact: +2348037326662</span>
          </div>
        </div>
        <div
          className={
            serviceName === "erAfrica" ? " hidden sm:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "erAfrica" ? "pl-20" : "hidden"}>
            <span className="block">Emergency Response Africa </span>
            <span className="text-[#B33625]">Contact: 080002255372</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviders;
