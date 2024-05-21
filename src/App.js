import "./App.css";
import "./style/style.css";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";


function App() {
  return (
    <div className="App">
  
      <div className="bg-mobile-bg">
        <NavBar />
        <Footer />

        <div className="hidden w-[50vw] md:block">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
} <SignUp />

export default App;
