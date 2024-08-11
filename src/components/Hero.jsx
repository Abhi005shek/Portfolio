import React from "react";

function Hero() {
  return (
    <section id="home" className="flex items-center h-[80vh] px-12 mb-20">
      <div className="font-orbitron ">
        <h1 className="text-4xl sm:text-6xl">Hi, I am</h1>
        <h1 className="text-4xl sm:text-5xl text-primary font-semibold">
          Abhishek Vishwakarma
        </h1>
        <h3 className="py-5 text-xl sm:text-3xl">Web Developer</h3>

        <div className="flex text-xs sm:text-sm">
          <button className="bg-primary text-white py-2 px-4 md:py-3 md:px-6 rounded-full">
            <a
              href="../assets/resume.pdf"
              download={"AbishekVishwakarmaResume"}
            >
              Download Resume
            </a>
          </button>
          <span className="px-2"></span>
          <button className="border-2 border-slate-800 py-2 px-4 md:py-3 md:px-6  rounded-full">
            Contact Me
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
