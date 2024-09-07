import React from "react";
import { HiOutlineMail, HiUser, HiUserCircle } from "react-icons/hi";
import { SiGmail, SiImessage } from "react-icons/si";

function Contact() {
  return (
    <div id="contacts" className="mt-28 min-h-[80vh] px-6 sm:px-12">
      <h1 className="text-center font-bangers text-4xl sm:text-6xl text-primary">
        Contact Me
      </h1>

      <div className="flex justify-center items-center font-mono mt-10">
        <div className="flex items-center gap-4 sm:gap-6 bg-slate-400 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
          <span>
            <SiGmail size={`1.8rem`} color="red" />
          </span>
          <span className="text-sm">abhishek005vk@gmail.com</span>
        </div>
      </div>

      <div className="mt-10 flex sm:justify-center">
        <form
          action=""
          className="font-mono flex-1 sm:flex-none shadow-xl p-4 flex flex-col gap-6 rounded-xl border-3"
        >
          <div className="text-black flex flex-col gap-3">
            <label className="text-primary sm:text-xl flex items-center gap-2">
              <span className="text-primary text-2xl sm:text-3xl">
                <HiUserCircle />
              </span>
              <span className="text-primary font-bangers">Name</span>
            </label>
            <input
              placeholder="Enter Name"
              className="border-slate-600 rounded border p-2 w-full md:w-[400px]"
            />
          </div>

          <div className="text-black flex flex-col gap-3">
            <label className="sm:text-xl flex items-center gap-2">
              <span className="text-primary text-2xl sm:text-3xl">
                <HiOutlineMail />
              </span>
              <span className="text-primary font-bangers">Email</span>
            </label>
            <input
              placeholder="Enter Email"
              type="email"
              className="border-slate-600 rounded border p-2 w-full md:w-[400px]"
            />
          </div>

          <div className="text-black flex flex-col gap-3">
            <label className="sm:text-xl flex items-center gap-2">
              <span className="text-primary text-2xl sm:text-3xl">
                <SiImessage />
              </span>
              <span className="text-primary font-bangers">Message</span>
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
