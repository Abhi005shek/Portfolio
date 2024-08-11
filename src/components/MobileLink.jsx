import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import NavLink from "./NavLink";
import { HiXMark } from "react-icons/hi2";

function MobileLink() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <div onClick={() => setIsOpen(true)} className="text-3xl">
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
            <span className="font-bold" onClick={() => setIsOpen(false)}>
              <HiXMark />
            </span>
          </li>
          <NavLink href="home">Home</NavLink>
          <NavLink href="about">About Me</NavLink>
          <NavLink href="projects">Projects</NavLink>
          <NavLink href="contacts">Contact Me</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default MobileLink;
