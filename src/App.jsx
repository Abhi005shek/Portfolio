import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Work from "./components/Work";

// #2522323
function App() {
  return (
    <div className="selection:bg-primary selection:text-white smooth-scroll text-black dark:text-white bg-[#f2f2f2] dark:bg-[#252323]">
      <Header />
      <Hero />
      <About />
      <Work/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
