import "./App.css";
import "./style/style.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";


function App() {
  return (
    <div className="App">
      <div className="bg-mobile-bg md:bg-desktop-bg">
        <NavBar />
<<<<<<< HEAD
<<<<<<< HEAD
        {/* <SignUp /> */}

=======
      
>>>>>>> 8c34f943fc30bf887b663e07d787906c7ff61f3a
        <Footer />

        <div className="hidden w-[50vw] md:block">
          <ImageCarousel />
        </div>
=======
        <Footer />
>>>>>>> 8f05a1e1f5e3019b804e1e434586d5d19335ab85
      </div>
    </div>
  );
}

export default App;
