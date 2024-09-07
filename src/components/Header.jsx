import NavLink from "./NavLink";
import MobileLink from "./MobileLink";
import moon from "../assets/images/moon-40.png";
import sun from "../assets/images/sun-40.png";
import { useEffect, useState } from "react";

function Header() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  function darkMode() {
    if (mode == "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }

  useEffect(darkMode, [mode]);

  return (
    <div className=" px-6 sm:px-12 py-6 flex justify-between items-end">
      <h2 className="text-primary text-2xl sm:text-3xl font-semibold font-bangers">
        Abhishek
      </h2>

      <nav className="flex">
        <MobileLink mode={mode} setMode={setMode} />
        <ul className="hidden md:flex items-center gap-10 font-semibold">
          <NavLink href="home">Home</NavLink>
          <NavLink href="about">About Me</NavLink>
          <NavLink href="skills">Skills</NavLink>
          <NavLink href="projects">Projects</NavLink>
          <NavLink href="contacts">Contact Me</NavLink>
          <li
            className="rounded-full border-2 border-[grey]"
            onClick={() => {
              setMode(mode == "light" ? "dark" : "light");
              // localStorage.setItem("isDark", mode);
            }}
          >
            <img
              src={mode == "light" ? moon : sun}
              className="themeIcon w-8 h-8 rounded-full"
            ></img>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
