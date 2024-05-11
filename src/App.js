import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App text-white bg-[#960E20]">
      <div className="bg-mobile-bg">
        <NavBar />
        <ResetPassword />
      </div>
    </div>
  );
}

export default App;
