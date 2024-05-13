import "./App.css";
import "./style/style.css";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App text-[#971B22]">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="bg-mobile-bg">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
