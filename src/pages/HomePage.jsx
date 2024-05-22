import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Search";
import HomepageHotlines from "../components/homepageHotlines";
import MainMenu from "../components/MainMenu";

function HomePage() {
  return (
    <div className="relative mx-4 h-screen bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="md:hidden py-4">
        <img
          src="/images/logo.png"
          style={{ width: "150px", height: "40px" }}
          alt="logo"
        />
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
      <div className="md:hidden">
        <HomepageHotlines />
      </div>
      <div className="md:hidden">
        <MainMenu />
      </div>
    </div>
  );
}

export default HomePage;
