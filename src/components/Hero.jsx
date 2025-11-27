// import profilepic from "../assets/images/profile.jpg";
import { motion } from "motion/react";
import abhipdf from "../../public/resume.pdf";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section
      id="home"
      className="flex justify-center items-center h-[80vh] px-12 mb-20"
    >
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="font-bangers"
      >
        <motion.h1
          variants={childVariants}
          className="text-center text-3xl sm:text-6xl"
        >
          Hi, I am
        </motion.h1>
        <motion.h1
          variants={childVariants}
          className="text-center  text-4xl sm:text-6xl text-primary font-semibold "
        >
          Abhishek Vishwakarma
        </motion.h1>
        <motion.h1
          variants={childVariants}
          className="text-center py-5 text-xl sm:text-5xl"
        >
          Web Developer
        </motion.h1>

        <motion.div
          variants={childVariants}
          className="font-mono font-semibold flex justify-center text-xs sm:text-sm"
        >
          {/* <button className="bg-primary text-white py-2 px-4 md:py-3 md:px-6 rounded-full"> */}
          <a
            className="bg-primary text-white py-2 px-4 md:py-3 md:px-6 rounded-full"
            // href={"/resume.pdf"}
            href={abhipdf}
            download={"AbishekVishwakarmaResume.pdf"}
          >
            Download Resume
          </a>
          {/* </button> */}
          <span className="px-2"></span>
          <button className="border-2 border-[#0ca678] py-2 px-4 md:py-3 md:px-6  rounded-full">
            <a target="_blank" href="https://www.linkedin.com/in/abhishek-vishwakarma-922493315/">
              Contact Me
            </a>
          </button>
        </motion.div>
      </motion.div>

      {/* <div className="mt-14 md:mt-0 flex-1 flex justify-center align-bottom">
        <img
          src={profilepic}
          style={{ borderRadius: "50%" }}
          className="h-[12rem] w-[13rem] sm:h-[20rem] sm:w-[20rem] border-[.7rem] sm:border-[1rem] border-[#0ca678] "
        />
      </div> */}
    </section>
  );
}

export default Hero;
