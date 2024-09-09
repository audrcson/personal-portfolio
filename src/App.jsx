import React from "react";
//components
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import Work from "./components/Work";
import Projects from "./components/Projects";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Home />
      <About />
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App