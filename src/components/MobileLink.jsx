import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import NavLink from "./NavLink";
import { HiXMark } from "react-icons/hi2";
import cursor from "../assets/images/hand-cursor.svg";
import moon from "../assets/images/moon-40.png";
import sun from "../assets/images/sun-40.png";

function MobileLink({ mode, setMode }) {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   document.addEventListener("click", () => setIsOpen(false));
  // }, [isOpen]);

  return (
    <div className="block md:hidden">
      <div
        onClick={(e) => {
          setIsOpen(true);
        }}
        className="text-3xl"
      >
        <HiMenuAlt2 />
      </div>
      <div>
        <ul
          className={`z-10 duration-500 text-xl top-0 bg-primary text-white h-screen ${
            isOpen ? "w-[50vw]" : "w-0"
          } flex flex-col gap-6 ${
            !isOpen ? "right-[-100px]" : "right-[0px]"
          } fixed font-orbitron font-semibold py-6 items-center`}
        >
          <li className="text-3xl w-full flex justify-end px-12">
            <span
              style={{
                cursor: `url(${cursor}), auto`,
              }}
              className="font-bold"
              onClick={() => setIsOpen(false)}
            >
              <HiXMark />
            </span>
          </li>
          <NavLink href="home">Home</NavLink>
          <NavLink href="about">About Me</NavLink>
          <NavLink href="projects">Projects</NavLink>
          <NavLink href="contacts">Contact Me</NavLink>

          <li
            className="rounded-full border-2 border-[grey]"
            onClick={() => setMode(mode == "light" ? "dark" : "light")}
          >
            <img
              src={mode == "light" ? moon : sun}
              className="themeIcon w-8 h-8 rounded-full"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileLink;
