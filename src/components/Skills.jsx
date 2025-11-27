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
  SiMui,
  SiGraphql ,
  SiShadcnui, 
  SiPostgresql
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import IconCard from "./iconCard";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      id="skills"
      className="min-h-[90vh] px-6 sm:px-20"
    >
      <motion.h1
        variants={childVariants}
        className="text-center font-bangers text-4xl sm:text-6xl text-primary"
      >
        Skills
      </motion.h1>

      <motion.div
        variants={childVariants}
        className="mt-10 flex justify-center items-center flex-col"
      >
        <p className="text-2xl font-mono mb-6 underline">FrontEnd </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-8 flex-wrap items-center justify-center"
        >
          <motion.span variants={childVariants}>
            <IconCard name={"html"}>
              <IoLogoHtml5 size={"4rem"} color="crimson" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"css"}>
              <IoLogoCss3 size={"4rem"} color="blue" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"javascript"}>
              <IoLogoJavascript size={"4rem"} color="yellow" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"React"}>
              <IoLogoReact size={70} color="skyblue" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"Redux"}>
              <SiRedux size={70} color="purple" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"Styled-components"}>
              <SiStyledcomponents size={70} color="hotpink" />
            </IconCard>
          </motion.span>
        </motion.div>

        {/* css frameworks */}
        <p className="mt-10 text-2xl font-mono mb-6 underline">
          Css Frameworks
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-8 flex-wrap items-center justify-center"
        >
          <motion.span variants={childVariants}>
            <IconCard name={"tailwind"}>
              <SiTailwindcss size={70} color="skyblue" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"sass"}>
              <IoLogoSass size={70} color="hotpink" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"bootstrap"}>
              <SiBootstrap size={70} color="purple" />
            </IconCard>
          </motion.span>
        </motion.div>

        {/* backend */}
        <p className="mt-10 text-2xl font-mono mb-6 underline">Familiar</p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-8 flex-wrap items-center justify-center"
        >
          <motion.span variants={childVariants}>
            <IconCard name={"NodeJs"}>
              <IoLogoNodejs size={70} color="green" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"ExpressJs"}>
              <SiExpress size={70} color="red" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"MongoDB"}>
              <SiMongodb size={70} color="green" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"Mongoose"}>
              <SiMongoose size={70} color="red" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"MySQL"}>
              <SiMysql size={70} color="blue" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"Postman"}>
              <SiPostman size={70} color="orange" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"React Native"}>
              <IoLogoReact size={70} color="skyblue" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"Material UI"}>
              <SiMui size={70} color="blue" />
            </IconCard>
          </motion.span>
          <motion.span variants={childVariants}>
            <IconCard name={"NextJs"}>
              <RiNextjsFill size={70} color="black" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"PostgreSQL"}>
              <SiPostgresql size={70} color="skyblue" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"GraphQL"}>
              <SiGraphql size={70} color="hotpink" />
            </IconCard>
          </motion.span>

          <motion.span variants={childVariants}>
            <IconCard name={"ShadCN"}>
              <SiShadcnui size={70} color="black" />
            </IconCard>
          </motion.span>

        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Skills;
