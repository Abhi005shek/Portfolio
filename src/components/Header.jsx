import NavLink from "./NavLink";
import MobileLink from "./MobileLink";

function Header() {
  return (
    <div className="border-2 px-6 sm:px-12 py-6 flex justify-between items-end">
      <h2 className="text-primary text-2xl font-semibold font-orbitron">
        Abhishek
      </h2>

      <nav className="flex">
        <MobileLink />
        <ul className="hidden md:flex font-orbitron gap-12 font-semibold">
          <NavLink href="home">Home</NavLink>
          <NavLink href="about">About Me</NavLink>
          <NavLink href="skills">Skills</NavLink>
          <NavLink href="projects">Projects</NavLink>
          <NavLink href="contacts">Contact Me</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
