import "./App.css";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Announce from "./pages/Home/Announce";
import NavHero from "./pages/Home/NavHero";
import Welcome from "./pages/Home/Welcome";
import GameBord from "./pages/Home/GameBord";
import Personalized from "./pages/Home/Personalized";
import GameFind from "./pages/Home/GameFind";
import Plan from "./pages/Home/plan";
import Testimonial from "./pages/Home/Testimonial";
import Guide from "./pages/Home/Guide";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Announce />

      <NavHero />

      <Welcome />

      <Guide />

      <GameBord />

       <Personalized />

      <GameFind />

      <Plan />

      <Testimonial />

      <Footer /> 

    </>
  );
}

export default App;
