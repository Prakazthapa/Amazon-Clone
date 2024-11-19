import { Route, Routes } from "react-router-dom";
import Footer from "./Components/footer/Footer.js";
import Navbar from "./Components/header/Navbar.js";
import MainComponent from "./Components/home/MainComponent.js";
import Newnav from "./Components/newnavbar/Newnav.js";
import Sign_in from "./Components/signup_sign/Sign_in.js";
import SIgnUp from "./Components/signup_sign/SignUp.js";
function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/register" element={<SIgnUp />} />
        <Route path="/login" element={<Sign_in />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
