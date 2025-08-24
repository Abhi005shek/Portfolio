import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function About() {
  return (
    <section id="about" className="px-6 sm:px-12 min-h-[90vh]">
      <h1 className="text-center font-bangers text-4xl sm:text-6xl text-primary">
        About Me
      </h1>

      <div className="mt-5 text-center font-mono sm:text-2xl sm:px-12">
        Hi👋, My name is Abhishek Vishwakarma. I'm a curious and driven web
        developer with a strong grasp of modern development practices and
        frameworks. I love bringing ideas to life—whether it's crafting sleek
        user interfaces or building scalable digital experiences from the ground
        up. My passion lies in creating, experimenting, and constantly learning.
      </div>

      <div className="mt-6 flex justify-center gap-7">
        <a href="http://github.com/Abhi005shek" target="_blank" title="Github">
          <IoLogoGithub size={"2.8rem"} className=" dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-vishwakarma-922493315/"
          target="_blank"
          title="Linkedin"
        >
          <IoLogoLinkedin size={"2.8rem"} className="text-sky-500 dark:text-sky-300"  />
        </a>
        <a href="#" title="Email: abhishek005vk@gmail.com">
          <SiGmail size={`2.8rem`} className="text-red-600 dark:text-red-500" />
        </a>
        <a href="https://x.com/Abhishek8954161">
          <FaXTwitter size={`2.8rem`} className="text-black dark:text-white" />
        </a>
      </div>
    </section>
  );
}

export default About;
