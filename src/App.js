import "./App.css";
import "./style/style.css";
import ResetPassword from "./pages/ResetPassword";
import NavBar from "./components/NavBar";
// import SearchBar from "./components/Search.jsx"

function App() {
  return (
    <div className="App text-white bg-[#960E20]">
      <div className="bg-mobile-bg">
        <NavBar />
        <ResetPassword />
        {/* <SearchBar /> */}
      </div>
    </div>
  );
}

export default App;
