import { useRef, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useInView, motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="about"
      className="px-6 sm:px-12 min-h-[90vh]"
    >
      <motion.h1
        variants={childVariants}
        className="text-center font-bangers text-4xl sm:text-6xl text-primary"
      >
        Work Experience
      </motion.h1>

      <motion.div
        variants={childVariants}
        className="mt-5 text-center font-mono sm:text-2xl sm:px-12"
      >
        <div className="lg:flex justify-between">
          <h2 className="font-bold">Associate Software Developer</h2>
          <h4 className="font-[550] italic">
            Mittal Software Labs (Sept 2024 - Feb 2025)
          </h4>
        </div>
        <p className="mt-2">
          Developed and maintained web applications. Built and optimized backend
          services and APIs. Managed databases, ensuring data integrity and
          security. Collaborated with cross-functional teams to gather
          requirements and implement features. Conducted code reviews, debugged
          issues, and performed testing
        </p>
      </motion.div>

      {/* <motion.div
        variants={childVariants}
        className="mt-6 flex justify-center gap-7"
      >
        <a href="http://github.com/Abhi005shek" target="_blank" title="Github">
          <IoLogoGithub size={"2.8rem"} className=" dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-vishwakarma-922493315/"
          target="_blank"
          title="Linkedin"
        >
          <IoLogoLinkedin
            size={"2.8rem"}
            className="text-sky-500 dark:text-sky-300"
          />
        </a>
        <a href="#" title="Email: abhishek005vk@gmail.com">
          <SiGmail size={`2.8rem`} className="text-red-600 dark:text-red-500" />
        </a>
        <a href="https://x.com/Abhishek8954161">
          <FaXTwitter size={`2.8rem`} className="text-black dark:text-white" />
        </a>
      </motion.div> */}
    </motion.section>
  );
}

export default Work;
