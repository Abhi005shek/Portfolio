import React from "react";
import { HiOutlineMail, HiUser, HiUserCircle } from "react-icons/hi";
import { SiImessage } from "react-icons/si";

function Contact() {
  return (
    <div id="contacts" className="mt-28 min-h-[80vh] px-6 sm:px-12">
      <h1 className="text-center font-orbitron text-4xl sm:text-6xl text-primary">
        Contact Me
      </h1>
      <div className="mt-10 flex sm:justify-center">
        <form
          action=""
          className=" flex-1 sm:flex-none bg-slate-100 shadow-md p-4 flex flex-col gap-6 rounded-xl border-3"
        >
          <div className="font-poppins flex flex-col gap-3">
            <label className="sm:text-xl flex items-center gap-2">
              <span className="text-primary text-2xl sm:text-3xl">
                <HiUserCircle />
              </span>
              <span>Name</span>
            </label>
            <input
              placeholder="Enter Name"
              className="border-slate-600 rounded border p-2 w-full md:w-[400px]"
            />
          </div>

          <div className="font-poppins flex flex-col gap-3">
            <label className="sm:text-xl flex items-center gap-2">
              <span className="text-primary text-2xl sm:text-3xl">
                <HiOutlineMail />
              </span>
              <span>Email</span>
            </label>
            <input
              placeholder="Enter Email"
              type="email"
              className="border-slate-600 rounded border p-2 w-full md:w-[400px]"
            />
          </div>

          <div className="font-poppins flex flex-col gap-3">
            <label className="sm:text-xl flex items-center gap-2">
              <span className="text-primary text-2xl sm:text-3xl">
                <SiImessage />
              </span>
              <span>Message</span>
            </label>
            <textarea
              rows={5}
              placeholder="Hello best wishes"
              className="border-slate-600 rounded border p-2 w-full md:w-[400px]"
            />
          </div>

          <button className="mt-6 bg-primary text-white py-2 sm:py-3 px-6 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
