import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { SiExpress, SiMongodb, SiMongoose, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

function Skills() {
  return (
    <section id="skills" className="min-h-[90vh] px-6 sm:px-20">
      <h1 className="text-center font-orbitron text-4xl sm:text-6xl text-primary">
        Skills
      </h1>

      <div className=" mt-6 gap-6 justify-center">
        <div className=" border-slate-800 mb-5 sm:mb-0 sm:p-10 rounded-lg">
          <h2 className="text-2xl font-orbitron mb-8">FrontEnd Development</h2>
          <div className=" bg-slate-100 p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 font-poppins mt-0">
            <p className="flex items-end gap-20 justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <IoLogoHtml5 color="crimson" />
                </span>
                <span>HTML</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <IoLogoCss3 color={"blue"} />
                </span>
                <span>CSS</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end gap-5 justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <IoLogoJavascript color="#facc15" />
                </span>
                <span>JAVASCRIPT</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-4xl font-semibold">
                  <IoLogoReact color="skyblue" />
                </span>
                <span>REACTJS</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>
          </div>
        </div>

        {/* BackEnd ----------------- */}
        <div className=" border-slate-800 sm:p-10 rounded-lg">
          <h2 className="text-2xl font-orbitron mb-8">BackEnd Development</h2>
          <div className="bg-slate-100 p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 font-poppins">
            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <IoLogoNodejs color="#16a34a" />
                </span>
                <span>NODEJS</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <SiExpress color="#7f1d1d" />
                </span>
                <span>EXPRESSJS</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <SiMongodb color="#16a34a" />
                </span>
                <span>MONGODB</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <SiMongoose color="#7f1d1d" />
                </span>
                <span>MONGOOSE</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className=" md:text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl sm:text-4xl">
                  <FaJava color="cyan" />
                </span>
                <span>JAVA</span>
              </p>
              <p className="text-sm text-slate-600">Intermediate</p>
            </p>

            <p className="flex items-end justify-between">
              <p className="text-xl font-semibold flex items-center gap-3">
                <span cclassName="text-2xl sm:text-4xl">
                  <SiMysql color="blue" />
                </span>
                <span>MYSQL</span>
              </p>
              <p className="text-sm text-slate-600">Basic</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
