import React from "react";
import NavBar from "../components/NavBar";

function ResourcesPage() {
  return (
    <div>
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="bg-mobile-bg md:bg-desktop-bg">
        <h1>Resources Page</h1>
      </div>
    </div>
  );
}

export default ResourcesPage;
