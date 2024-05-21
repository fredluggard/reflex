import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EmergencyContacts from "./pages/EmergencyContacts";


function App() {
  return (
    <div className="App">
      <div className="bg-mobile-bg">
        <NavBar />
        <EmergencyContacts />
        <Footer />
        <div className="hidden w-[50vw] md:block"></div>
      </div>
    </div>
  );
}

export default App;
