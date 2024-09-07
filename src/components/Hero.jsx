import profilepic from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="flex justify-center items-center h-[80vh] px-12 mb-20"
    >
      <div className="font-bangers">
        <h1 className="text-center text-3xl sm:text-6xl">Hi, I am</h1>
        <h1 className="text-center  text-4xl sm:text-6xl text-primary font-semibold ">
          Abhishek Vishwakarma
        </h1>
        <h3 className="text-center py-5 text-xl sm:text-5xl">Web Developer</h3>

        <div className="font-mono font-semibold flex justify-center text-xs sm:text-sm">
          <button className="bg-primary text-white py-2 px-4 md:py-3 md:px-6 rounded-full">
            <a
              href="../assets/resume.pdf"
              download={"AbishekVishwakarmaResume"}
            >
              Download Resume
            </a>
          </button>
          <span className="px-2"></span>
          <button className="border-2 border-[#0ca678] py-2 px-4 md:py-3 md:px-6  rounded-full">
            Contact Me
          </button>
        </div>
      </div>

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
