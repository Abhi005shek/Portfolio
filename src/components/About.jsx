import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

function About() {
  return (
    <section id="about" className="px-6 sm:px-12 min-h-[90vh]">
      <h1 className="text-center font-bangers text-4xl sm:text-6xl text-primary">
        About Me
      </h1>

      <div className="mt-5 text-center font-mono sm:text-2xl sm:px-12">
        Hi, My name is Abhishek Vishwakarma. I am currently pursuing a Btech
        degree in Computer Science. I am passionate about writing clean,
        efficient and optimized code. I wrote my First Program in C++ in 2020.
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <a href="#" title="Github">
          <IoLogoGithub size={"2.8rem"} color="white" />
        </a>
        <a href="#" title="Linkedin">
          <IoLogoLinkedin size={"2.8rem"} color="skyblue" />
        </a>
        <a href="#" title="Email">
          <SiGmail size={`2.8rem`} color="red" />
        </a>
      </div>
    </section>
  );
}

export default About;
