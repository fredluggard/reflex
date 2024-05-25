import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EmergencyContacts from "./pages/EmergencyContacts";

function App() {
  return (
    <div className="App">
      <div className="relative h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
        <NavBar />
        <EmergencyContacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
