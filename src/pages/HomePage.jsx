import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Search";
import HomepageHotlines from "../components/homepageHotlines";
import MainMenu from "../components/MainMenu";
import map from '../images/mapImage/map.svg'

function HomePage() {
  return (
    <div className="relative mx-4 h-screen bg-mobile-bg md:bg-desktop-bg bg-cover bg-center p-10">
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
      <div className=" hidden sm:hidden md:block lg:block mt-10">
        <ul className="flex justify-end space-x-1">
          <li>
            <button style={{ padding: '5px 15px', fontSize: '16px', borderRadius: '20px', border: '1px solid #ccc', background: 'rgb(255, 178, 178)', color: 'white' }}>All</button>
          </li>
          <li>
            <button style={{ padding: '5px 15px', fontSize: '16px', borderRadius: '20px', border: '1px solid #ccc', background: 'rgb(255, 178, 178)', color: 'white'}}>Ambulance</button>
          </li>
          <li>
            <button style={{ padding: '5px 15px', fontSize: '16px', borderRadius: '20px', border: '1px solid #ccc', background: 'rgb(255, 178, 178)', color: 'white' }}>Police</button>
          </li>
          <li>
            <button style={{ padding: '5px 15px', fontSize: '16px', borderRadius: '20px', border: '1px solid #ccc', background: 'rgb(255, 178, 178)', color: 'white' }}>Fire Service</button>
          </li>
          <li>
            <button style={{ padding: '5px 15px', fontSize: '16px', borderRadius: '20px', border: '1px solid #ccc', background: 'rgb(255, 178, 178)', color: 'white'}}>Road Safety</button>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <HomepageHotlines />
      </div>

      <div className=" hidden sm:hidden md:block lg:block mt-10 ">
        <div className="flex justify-evenly gap-6">
          <div className="basis-1/2">
            <div>
              <p className="text-6xl md:text-5xl"> 
                Find emergency services close-by
              </p>
            </div>

            <div className="mt-4 text-2xl">
              <p>
                Select your current location and find the nearest service provider
              </p>
            </div>

            <div className="mt-4 lg:basis-1/4">
              <SearchBar />
            </div>
          </div>

          <div className="md:basis-1/2 lg:basis-1/3">
            <img src={map} alt='MAP'/>
          </div>
        </div>

        
      </div>

      <div className="md:hidden">
        <MainMenu />
      </div>
    </div>
  );
}

export default HomePage;
