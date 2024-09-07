import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div className="shadow-lg flex flex-col items-center justify-center mt-40 p-6 min-h-28 font-poppins">
      <div className="text-3xl">
        <p className="flex gap-5 mb-4">
          <span>
            <a href="http://github.com/Abhi005shek" target="blank">
              <IoLogoGithub />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/abhishek-vishwakarma-922493315/"
              target="blank"
            >
              <IoLogoLinkedin />
            </a>
          </span>
        </p>
      </div>
      <p className="text-center md:text-xl font-mono font-semibold">
        Created By{" "}
        <span className="text-primary font-bangers">Abhishek Vishwakarma</span>
      </p>
    </div>
  );
}

export default Footer;
