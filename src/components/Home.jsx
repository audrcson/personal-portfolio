import React from "react";
import { TypeAnimation } from "react-type-animation";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="section bg-gradient-to-b from-[#6ed6f3] via-[#d6eff6]  to-[#ffffff] lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center">
          <div className="text-[#266ca9] mb-4 text-4xl sm:text-5xl lg:text-6xl poppins-bold mt-16 sm:mt-0">
            Halo! I'm Jenni
          </div>
          <span className="text-[#02457a] text-2xl">
            And I&apos;m a {" "}
            <span className="text-[#02457a] text-2xl poppins-semibold">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Engineer",
                  1000,
                  "Data Enthusiast",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </span>
          <div className="text-[#266ca9] my-4 text-xl sm:text-2xl lg:text-3xl poppins-regular">
            Welcome to my Portfolio!
          </div>

          <div className="mt-4 mb-8 flex space-x-2">
            <a href="https://www.linkedin.com/in/jenni-febiyola/">
              <FaLinkedin color="#266ca9" size={30} />
            </a>
            <a href="https://github.com/audrcson">
              <FaGithub color="#266ca9" size={30} />
            </a>
            <a href="https://www.instagram.com/jennifebiyola_">
              <FaInstagram color="#266ca9" size={30} />
            </a>
          </div>

          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/path/to/your-cv.pdf'; // Ganti dengan URL/path file CV
                link.download = 'Jenni_Febiyola_CV.pdf'; // Nama file saat diunduh
                link.click();
              }}
              className="px-6 py-3 w-44 bg-[#266ca9] hover:bg-[#90e0ef] text-white font-medium rounded-lg flex items-center justify-center space-x-2"
            >
              <span>Download CV</span>
              <MdOutlineFileDownload />
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 w-44 bg-[#266ca9] hover:bg-[#90e0ef] text-white font-medium rounded-lg flex items-center justify-center space-x-2">
              <span>Say Hello</span>
              <PiPaperPlaneTilt />
            </button>
          </div>
        </div>
        <div className="col-span-1 place-self-center my-16 lg:mt-0">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/jenni.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
