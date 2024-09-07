import { HiArrowRight } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

function ProjectCard({ children, title, source, projectlink, demo }) {
  return (
    <div className="p-3 rounded-none border-0 border-slate-300 bg-[#0ca678] shadow-md hover:shadow-2xl">
      <h2 className=" flex justify-between items-center text-xl  pb-4 font-bangers">
        <span className="">{title}</span>
        <span>
          <HiArrowRight />
        </span>
      </h2>
      <img className=" w-full h-56 rounded" src={source} />

      <p className="text-white dark:white font-mono pt-6 text-xs sm:text-sm">
        {children}
      </p>

      <div className="font-mono mt-4 flex flex-1 justify-center gap-4 text-xs sm:text-sm">
        <button className="rounded-full bg-black text-white">
          <a
            href={projectlink}
            className="flex gap-2 py-3 px-3 items-center"
            target="_blank"
          >
            <span className="text-xl">
              <IoLogoGithub />
            </span>
            <span>Github</span>
          </a>
        </button>

        <button className="border-2 rounded-full  bg-primary text-white">
          <a
            href={demo}
            className="flex py-2 px-3 items-center"
            target="_blank"
          >
            <span className="text-xl">
              <GoDotFill />
            </span>
            <span>Live Demo</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
