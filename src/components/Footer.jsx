import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div className="shadow-lg flex flex-col items-center justify-center mt-40 p-6 min-h-28 font-poppins">
      <div className="text-3xl">
        <p className="flex gap-5 mb-4">
          <span>
            <a href="http://github.com/Abhi005shek" target="_blank">
              <IoLogoGithub size={35} />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/abhishek-vishwakarma-922493315/"
              target="_blank"
            >
              <IoLogoLinkedin size={35} />
            </a>
          </span>
          <span>
            <a href="https://x.com/Abhishek8954161">
              <FaXTwitter size={34} className="text-black dark:text-white" />
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
