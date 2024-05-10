import "./App.css";
import "./style/style.css";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App text-white bg-[#960E20]">
      <h1>RefleX Emergency App</h1>
      <SignUp />
    </div>
  );
}

export default App;
