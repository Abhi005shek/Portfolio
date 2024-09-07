import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostman,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
// import { FaJava } from "react-icons/fa6";
import IconCard from "./iconCard";

function Skills() {
  return (
    <section id="skills" className="min-h-[90vh] px-6 sm:px-20">
      <h1 className="text-center font-bangers text-4xl sm:text-6xl text-primary">
        Skills
      </h1>

      <div className="mt-10 flex justify-center items-center flex-col">
        <p className="text-2xl font-mono mb-6 underline">FrontEnd </p>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <IconCard name={"html"}>
            <IoLogoHtml5 size={"4rem"} color="crimson" />
          </IconCard>

          <IconCard name={"css"}>
            <IoLogoCss3 size={"4rem"} color="blue" />
          </IconCard>

          <IconCard name={"javascript"}>
            <IoLogoJavascript size={"4rem"} color="yellow" />
          </IconCard>

          <IconCard name={"React"}>
            <IoLogoReact size={70} color="skyblue" />
          </IconCard>

          <IconCard name={"Redux"}>
            <SiRedux size={70} color="purple" />
          </IconCard>

          <IconCard name={"Styled-components"}>
            <SiStyledcomponents size={70} color="hotpink" />
          </IconCard>
        </div>

        {/* css frameworks */}
        <p className="mt-10 text-2xl font-mono mb-6 underline">
          Css Frameworks{" "}
        </p>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <IconCard name={"tailwind"}>
            <SiTailwindcss size={70} color="skyblue" />
          </IconCard>

          <IconCard name={"sass"}>
            <IoLogoSass size={70} color="hotpink" />
          </IconCard>

          <IconCard name={"bootstrap"}>
            <SiBootstrap size={70} color="purple" />
          </IconCard>
        </div>
        {/*  */}

        {/* backend */}
        {/* css frameworks */}
        <p className="mt-10 text-2xl font-mono mb-6 underline">Familiar</p>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <IconCard name={"NodeJs"}>
            <IoLogoNodejs size={70} color="green" />
          </IconCard>

          <IconCard name={"sass"}>
            <SiExpress size={70} color="red" />
          </IconCard>

          <IconCard name={"MongoDB"}>
            <SiMongodb size={70} color="green" />
          </IconCard>

          <IconCard name={"Mongoose"}>
            <SiMongoose size={70} color="red" />
          </IconCard>

          <IconCard name={"MySQL"}>
            <SiMysql size={70} color="blue" />
          </IconCard>

          <IconCard name={"Postman"}>
            <SiPostman size={70} color="orange" />
          </IconCard>

          {/*  */}
        </div>
        {/*  */}
      </div>
    </section>
  );
}

export default Skills;
