import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import ImageCarousel from "./components/ImageCarousel";
import FirstAid from "./components/FirstAid";
import FireSafety from "./components/FireSafety";
import RoadAndDriverSafety from "./components/RoadAndDriverSafety";

=======
>>>>>>> 2ca0edf3da62cef496433a17006b6dcdcc3f670b


function App() {
  return (
    <div className="App">
      <div className="bg-mobile-bg md:bg-desktop-bg">
        <NavBar />
      
        <Footer />
<<<<<<< HEAD

        <div className="hidden w-[50vw] md:block">
          <ImageCarousel />
        </div>

        <FirstAid />

        <FireSafety />

        <RoadAndDriverSafety />

=======
        <div className="hidden w-[50vw] md:block"></div>
>>>>>>> 2ca0edf3da62cef496433a17006b6dcdcc3f670b
      </div>
    </div>
  );
}

export default App;
