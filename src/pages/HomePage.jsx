import React from "react";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="relative mx-4 h-screen bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
    </div>
  );
}

export default HomePage;
