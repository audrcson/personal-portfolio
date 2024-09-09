import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Learnfinitee",
    description: "Description for Web Project 1",
    image: "/projects/project1.png",
    previewUrl: "https://frontend-lms-chi.vercel.app",
    tag: ["Website"],
  },
  {
    id: 2,
    title: "Smart Generator Divider",
    description: "Smart Generator Divider berfungsi untuk memprediksi berapa banyak generator yang dibutuhkan untuk memberi supply pada jaringan listrik, agar pemberian generator dapat terbagi dan tidak membebani salah satu generator.",
    image: "/projects/project2.png",
    previewUrl: "https://www.youtube.com/watch?v=V1AGqkbBjXU",
    tag: ["Website", "IoT"],
  },
  {
    id: 3,
    title: "Color Detection and Positioning System",
    description: "In this project, a sensor or camera is used to detect a blue coloured object and the system determines its position on the screen, then turns on the LED according to the position of the object displayed on the computer screen.",
    image: "/projects/project3.png",
    previewUrl: "https://drive.google.com/file/d/1YSZkpMSEM8Isj_79gRHcGBR-erpm8Akn/view",
    tag: ["Other"],
  },
  {
    id: 4,
    title: "Space Mania",
    description: "Space Mania is a two-dimensional aircraft shooting game. As a player, you must shoot aliens or enemies to get points and avoid collisions or attacks with and from enemies so that your hp does not decrease. Each player is given three chances and a hp value of 100.",
    image: "/projects/project4.png",
    previewUrl: "https://github.com/audrcson/Space-Mania",
    tag: ["Other"],
  },
  {
    id: 5,
    title: "Redesign SPADA UPI",
    description: "Redesigned the user interface of UPI's online learning system using Figma",
    image: "/projects/project5.png",
    previewUrl: "https://www.figma.com/proto/YFr8GcjHsOUoTvxItyAbHY/Untitled?node-id=1-10519&t=CHgoyxpdRTJLChuU-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A38881",
    tag: ["Other"],
  },
  {
    id: 6,
    title: "Smart Blind Sensor",
    description: "Smart Blind Sensor is a pair of glasses equipped with an ultrasonic sensor. We also use Arduino UNO as the microcontroller. This SBS emits a sound from the buzzer when the sensor is 50 cm away.",
    image: "/projects/project6.png",
    previewUrl: "https://github.com/Rizkyhamm/SBS",
    tag: ["IoT"],
  },
  {
    id: 7,
    title: "Pasti Sampai",
    description: "Pasti Sampai is a website that serves to facilitate users in accessing consumer product data and monitoring logistics activities stored in the database.",
    image: "/projects/project7.png",
    previewUrl: "https://github.com/refriscaca/PastiSampai",
    tag: ["Website"],
  },
  {
    id: 8,
    title: "Smart Curtain",
    description: "This project aims to make Smart curtains that can facilitate humans, especially a mother in the process of opening or closing curtains automatically.",
    image: "/projects/project8.png",
    previewUrl: "https://drive.google.com/drive/u/0/folders/1Z81NX5oXKXwUAcn1NmB1SKT1O6-Nxcho",
    tag: ["IoT"],
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
    console.log("Selected Tag:", newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  return (
    <>
      <div id="projects" className="text-center pt-8">
        <h2 className="poppins-bold text-4xl text-[#266ca9] mt-4 mb-3">
          My Projects
        </h2>
        <h2 className="text-[#90e0ef] poppins-light text-xl mb-6">Portfolio</h2>
      </div>
      <div className="text-white flex flex-wrap justify-center gap-2 py-2 mb-3">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Website" isSelected={tag === "Website"} />
        <ProjectTag onClick={handleTagChange} name="IoT" isSelected={tag === "IoT"} />
        <ProjectTag onClick={handleTagChange} name="Other" isSelected={tag === "Other"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {console.log("Current Tag:", tag)}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
      {/* Tambahkan margin-bottom atau padding-bottom untuk jarak bawah */}
      <div className="mb-8"></div>
    </>
  );
};

export default Projects;
