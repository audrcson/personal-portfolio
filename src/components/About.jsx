import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { Link } from "react-scroll";

const TabData = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Web Developer Intern at Infinite Learning Indonesia (Batam, Riau Islands)</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>Machine Learning Developer : Belajar Machine Learning untuk Pemula - Dicoding</li>
        <li>DTS-TSA Pandu Indonesia - Ministry of Communication and Information of Indonesia</li>
      </ul>
    )
  },
]

const About = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <div id="about" className=" section bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#d6eff6] lg:py-12 ">
      <div className="flex flex-col justify-center items-center text-center text-xl sm:text-2xl poppins-semibold mb-4 mt-6">
        <h2 className="mb-2 text-[#90e0ef]">Get to Know</h2>
        <h2 className="text-3xl sm:text-4xl text-[#266ca9]">About Me</h2>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/3 lg:ml-12 ml-4 flex justify-center lg:justify-end mb-4 lg:mb-0">
          <img
            src="/about.png"
            alt="About Me"
            className="object-cover"
            width={300}
            height={300}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full"></div>
        </div>
        <div className="lg:w-2/3 mt-6 mx-4 lg:mx-16">
          <p className="text-[#266ca9] poppins-regular font-xl px-4 lg:pr-16 text-justify">
            Halo! My name is Jenni, I am a Mechatronics and Artificial Intelligence Engineering student at Universitas Pendidikan Indonesia.
            I have a great passion and enthusiasm for Machine Learning, Web Development, Data Analysis, and Internet of Things, which drives me to explore new technologies and innovative solutions.
            My journey through these fields has been marked by a deep curiosity and a commitment to continuous learning, as I strive to merge theoretical knowledge with practical applications to solve problems.
          </p>
          <div className="mx-4 flex felx-row justify-start mt-4">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-2 ml-4 text-[#266ca9] poppins-semilight ">{TabData.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
