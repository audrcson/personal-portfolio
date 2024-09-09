import React from "react";
import { FaPython, FaHtml5, FaGitAlt, FaReact, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoTableau } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiArduino, SiGooglecolab, SiTensorflow } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillData = [
  { image: <FaPython />, text: "Python" },
  { image: <FaJava />, text: "Java" },
  { image: <GrMysql />, text: "MySql" },
  { image: <FaHtml5 />, text: "HTML" },
  { image: <IoLogoCss3 />, text: "CSS" },
  { image: <IoLogoJavascript />, text: "Javascript" },
  { image: <FaReact />, text: "React js" },
  { image: <RiTailwindCssFill />, text: "Tailwind CSS" },
  { image: <FaGitAlt />, text: "Git" },
  { image: <VscVscode />, text: "VS Code" },
  { image: <SiGooglecolab />, text: "Google Colab" },
  { image: <IoLogoTableau />, text: "Tableau" },
  { image: <SiTensorflow />, text: "Tensorflow" },
  { image: <SiArduino />, text: "Arduino" },
];

const Skill = () => {
  return (
    <div id="skills" className="section bg-[#d6eff6] min-h-screen lg:py-6 flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center text-center text-xl sm:text-2xl poppins-semibold mb-4">
        {/* Tambahkan margin top hanya untuk ponsel */}
        <h2 className="mb-2 text-3xl sm:text-4xl text-[#266ca9] mt-12 sm:mt-0">Skill and Abilities</h2>
        <h2 className="text-[#90e0ef]">My Experience</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-2 mb-3 px-4 lg:px-20">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="h-24 w-32 bg-[#266ca9] rounded-lg flex flex-col justify-center items-center p-2"
          >
            <div className="text-center text-sm md:text-base text-white">
              <div className="text-4xl mb-1 flex items-center justify-center">{skill.image}</div>
              <div className="">{skill.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
