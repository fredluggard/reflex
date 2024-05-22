import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-mobile-bg md:bg-desktop-bg">
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
