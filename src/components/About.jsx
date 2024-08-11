import React from "react";

function About() {
  return (
    <section id="about" className="px-6 sm:px-12 min-h-[90vh]">
      <h1 className="text-center font-orbitron text-4xl sm:text-6xl text-primary">
        About Me
      </h1>

      <div className="py-16 flex flex-col sm:flex-row gap-16 items-center justify-center font-poppins text-xs sm:text-sm">
        <div className="min-w-[50%] flex items-center justify-center rounded-2xl min-h-56">
          <div className="bg-slate-400 rounded-2xl h-[250px] w-[100%]">
            <img></img>
          </div>
        </div>

        <div>
          {/* <h2 className="text-2xl font-semibold">Education</h2> */}
          <div className="flex items-center gap-3 text-center">
            <p className="p-4 border-2 border-slate-500 rounded-xl">
              <h2 className="font-bold">Btech CSE </h2>
              <p>Maharshi Dyanand University</p>
            </p>

            <p className="p-4 border-2 border-slate-500 rounded-xl text-center">
              <h2 className="font-bold">Senior Secondary Education </h2>
              <p>St.Sophia Sr.Sec School</p>
            </p>
          </div>
          <p>
            <h2></h2>
          </p>

          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            architecto at possimus labore consequatur doloremque neque dolores
            sunt? Est, sequi! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Repudiandae, blanditiis!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
