import React, { useState } from "react";
import axios from "axios";
import Settings from "../components/Settings";
import { FaCircleXmark, FaCircleCheck } from "react-icons/fa6";

function AccountPreference() {
  const initialFormState = {
    firstname: "",
    lastname: "",
    location: "",
  };

  const [userData, setUserData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const updateProfile = async (userData) => {
    try {
      const response = await axios.put(
        "https://reflex1-3.onrender.com/api/user/profile",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("Profile updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to update profile:", error.message);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = await updateProfile(userData);
      console.log("Profile updated successfully:", updatedProfile);
      alert("Profile updated successfully");
    } catch (error) {
      alert("Error updating profile. Please try again later.");
    }
  };

  const handleCancel = () => {
    setUserData(initialFormState);
  };

  return (
    <div className="flex flex-col-reverse w-[98%] md:flex-row justify-evenly md:mx-4 md:my-8 text-lg md:text-base">
      <Settings />
      <div className="md:bg-[#F5F5F5] rounded md:pt-24 md:pb-72 px-4 md:w-[70%]">
        <div className="flex w-[100%] justify-center md:justify-start items-center gap-4 mb-12">
          <img
            src="/images/profile-pic.png"
            alt="User profile"
            className="w-[15%] rounded-full"
          />
          <div className="font-light">
            <div className="flex space-x-2 bg-white px-4 py-2 rounded-xl cursor-pointer mb-2">
              <img src="/images/gallery.png" alt="" />
              <p className="text-sm">Change</p>
            </div>
            <div className="flex space-x-2 bg-white px-4 py-2 rounded-xl cursor-pointer">
              <img src="/images/trash.png" alt="" />
              <p className="text-sm">Remove</p>
            </div>
          </div>
        </div>
        <form className="w-[100%] px-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="firstname">First name</label>
          </div>
          <input
            className="border rounded-lg font-light bg-[#F5F5F5] w-[100%] py-4 px-4 mb-4"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Narzarh"
            value={userData.firstname}
            onChange={handleChange}
            required
          />
          <div className="mb-2">
            <label htmlFor="lastname">Last name</label>
          </div>
          <input
            className="border rounded-lg font-light bg-[#F5F5F5] w-full py-4 px-4 mb-4"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Okafor"
            value={userData.lastname}
            onChange={handleChange}
            required
          />
          <div className="mb-2">
            <label htmlFor="location">Location</label>
            <div className="flex space-x-8 items-center">
              <div className="flex items-center space-x-2">
                <img
                  src="images/flag-icon.png"
                  className="height-[20%]"
                  alt="Flag"
                />
                <img src="/images/Vector 2.png" alt="" />
              </div>
              <input
                className="border rounded-lg font-light bg-[#F5F5F5] w-full py-4 px-4 mb-6"
                type="text"
                name="location"
                id="location"
                placeholder="Independence layout, Enugu."
                value={userData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex w-[100%] justify-evenly mb-8">
            <FaCircleXmark
              type="button"
              onClick={handleCancel}
              className="w-10 h-10 md:w-0 md:hidden cursor-pointer"
            />
            <button
              type="button"
              className="hidden md:flex border border-[#B33625] text-[#B33625] md:px-44 py-2 rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <FaCircleCheck
              type="button"
              className="w-10 h-10 md:hidden cursor-pointer"
            />
            <button
              type="submit"
              className="hidden md:flex border border-[#B33625] md:px-44 py-2 text-[#B33625] rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountPreference;
