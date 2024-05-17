import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Search";
import HomepageHotlines from "../components/homepageHotlines";
import MainMenu from "../components/MainMenu";

function HomePage() {
  return (
    <div className="h-screen">
      <nav className=" md:block bg-none">
        <NavBar />
      </nav>
      <div className="relative h-full w-full gap-10 flex flex-col justify-between bg-mobile-bg">
        <SearchBar />
        <HomepageHotlines />
        <section className="relative">
          <MainMenu />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
