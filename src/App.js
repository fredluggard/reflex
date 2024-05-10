import "./App.css";
import "./style/style.css";
// import ResetPassword from "./pages/ResetPassword";
import Mainmenu from "./components/MainMenu";


function App() {
  return (
    <div className="App text-white bg-[#960E20]">
      <div className="bg-mobile-bg">
        <h1>RefleX Emergency App</h1>
        {/* <ResetPassword /> */}
        <Mainmenu />
      </div>
      
    </div>
  );
}

export default App;
