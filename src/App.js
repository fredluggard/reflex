import "./App.css";
import "./style/style.css";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-mobile-bg">
        <SignUp />
        <div className="hidden w-[50vw] md:block">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
