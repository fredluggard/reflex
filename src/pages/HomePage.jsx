import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Search";
import HomepageHotlines from "../components/homepageHotlines";
import MainMenu from "../components/MainMenu";

function HomePage() {
  return (
    <div className="h-screen  bg-mobile-bg md:bg-desktop-bg">
      <nav className=" md:block ">
        <NavBar />
      </nav>
      <div className="relative h-full w-full gap-10 flex flex-col justify-between px-6">
        <section className="">
          <div className=" mt-4 flex flex-col gap-6">
            <SearchBar />
            <HomepageHotlines />
          </div>
        </section>
        <section className="relative">
          <MainMenu />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
