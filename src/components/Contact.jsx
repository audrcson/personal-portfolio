import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="grid md:grid-cols-2 min-h-screen py-24 gap-4 bg-[#d6eff6] px-4 md:px-12">
      <div className="">
        <h5 className="text-[#02457a] text-xl font-bold my-2">
          Let me join your Team!
        </h5>
        <p className="text-[#266ca9] poppins-xl mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mb-8">
          <span className="mt-4 flex space-x-2">
            <a href="https://www.linkedin.com/in/jenni-febiyola/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="#02457a" size={30} />
            </a>
            <a href="https://github.com/audrcson" target="_blank" rel="noopener noreferrer">
              <FaGithub color="#02457a" size={30} />
            </a>
            <a href="https://www.instagram.com/jennifebiyola_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram color="#02457a" size={30} />
            </a>
          </span>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-[#02457a] block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-white border border-[#02457a] placeholder-[#9ca2a9] text-[#666a6e] text-sm rounded-lg block w-full p-2.5"
              placeholder="haveagreatday@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-[#02457a] block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-white border border-[#02457a] placeholder-[#9ca2a9] text-[#666a6e] text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-[#02457a] block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-white border border-[#02457a] placeholder-[#9ca2a9] text-[#666a6e] text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-[#266ca9] text-white font-medium py-2.5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
      <div className="md:col-span-2 text-center mt-12">
        <p className="text-[#02457a] text-sm">
          © 2024 Jenni Febiyola Sari. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Contact;
