import "./App.css";
import "./style/style.css";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import FirstAid from "./components/FirstAid";
import FireSafety from "./components/FireSafety";
import RoadAndDriverSafety from "./components/RoadAndDriverSafety";



function App() {
  return (
    <div className="App">
  
      <div className="bg-mobile-bg">
        <NavBar />
        <SignUp />

        <Footer />

        <div className="hidden w-[50vw] md:block">
          <ImageCarousel />
        </div>

        <FirstAid />

        <FireSafety />

        <RoadAndDriverSafety />

      </div>
    </div>
  );
}

export default App;
