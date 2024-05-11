import "./App.css";
import "./style/style.css";
import ResetPassword from "./pages/ResetPassword";
import NavBar from "./components/NavBar";
import Mainmenu from "./components/MainMenu";

function App() {
  return (
    <div className="App text-white bg-[#960E20]">
      <div className="bg-mobile-bg">
        <NavBar />
        <ResetPassword />
        <Mainmenu />
        
        
      </div>
    </div>
  );
}

export default App;

