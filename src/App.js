import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Tracks from "./components/tracks";
import FAQ from "./components/faq";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Tracks />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
