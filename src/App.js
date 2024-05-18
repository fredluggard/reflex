import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";


function App() {
  return (
    <div className="App">
      <div className="bg-mobile-bg md:bg-desktop-bg">
        <NavBar />
        {/* <SignUp /> */}

        <Footer />

        <div className="hidden w-[50vw] md:block">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
