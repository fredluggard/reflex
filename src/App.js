import "./App.css";
import "./style/style.css";
import ResetPassword from "./pages/ResetPassword";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App text-white bg-[#960E20]">
      <div className="bg-mobile-bg">
        <h1>RefleX Emergency App</h1>
        <ResetPassword />
      </div>
    </div>
  );
}

export default App;
