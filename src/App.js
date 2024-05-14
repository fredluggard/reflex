import "./App.css";
import "./style/style.css";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-mobile-bg">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
