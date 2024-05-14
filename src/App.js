import "./App.css";
import "./style/style.css";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
      <div className="bg-mobile-bg">
        <NavBar />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
