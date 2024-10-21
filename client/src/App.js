import Footer from "./Components/footer/Footer.js";
import Navbar from "./Components/header/Navbar.js";
import MainComponent from "./Components/home/MainComponent.js";
import Newnav from "./Components/newnavbar/Newnav.js";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
