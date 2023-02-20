import React from "react";
import "./App.css";
import BottomFixNav from "./components/BottomFixNav/BottomFixNav";
import Choices from "./components/Choices/Choices";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Goals from "./components/Goals/Goals";
import Home from "./components/Home/Home";
import { Player } from "./components/Player/Player";
import RightFixNav from "./components/RightFixNav/RightFixNav";
import Services from "./components/Services/Services";
function App() {
  return (
    <div className="App">
      <BottomFixNav />
      <RightFixNav />
      <Home />

      <Goals />
      <Services />
      <Player />
      <Choices />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
