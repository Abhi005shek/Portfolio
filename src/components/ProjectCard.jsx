import { HiArrowRight } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

function ProjectCard({ children, title, source, projectlink, demo }) {
  return (
    <div className="p-5 shadow rounded-lg border-2 border-slate-300">
      <h2 className=" flex justify-between items-center text-xl  pb-4 font-orbitron">
        <span className="">{title}</span>
        <span>
          <HiArrowRight />
        </span>
      </h2>
      <img className=" w-full h-56 rounded" src={source} />

      <p className="font-poppins pt-6 text-xs sm:text-sm">{children}</p>

      <div className="mt-4 flex flex-1 justify-center gap-4 text-xs sm:text-sm">
        <button className="flex gap-2 items-center rounded-full py-3 px-6 bg-black text-white">
          <span className="text-xl">
            <IoLogoGithub />
          </span>
          <span>
            <a href={projectlink} target="_blank">
              Github
            </a>
          </span>
        </button>

        <button className="flex items-center gap-1 rounded-full py-2 px-3 sm:py-3 sm:px-6 bg-primary text-white">
          <span className="text-xl">
            <GoDotFill />
          </span>
          <span>
            <a href={demo} target="_blank">
              Live Demo
            </a>
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
