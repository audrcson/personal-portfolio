import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="px-6">
      {/* Image Section with Padding and Background */}
      <div className="bg-[#266ca9] p-4 rounded-t-xl">
        <div
          className="h-52 md:h-52 bg-white rounded-lg"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="px-5 pb-3 text-white hover:text-white/50 bg-[#266ca9] rounded-b-xl">
        <h3
          className="text-lg font-semibold mb-2 cursor-pointer"
          onClick={handleTitleClick}
        >
          {title}
        </h3>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-[#266ca9] text-white p-6 rounded-lg w-9/12 sm:w-11/12 md:w-1/2 lg:w-1/3">
            {/* Close Icon */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-4 text-white hover:text-white/50"
            >
              &times;
            </button>

            {/* Image above the title */}
            <img
              src={imgUrl}
              alt={title}
              className="w-full h-40 my-4 object-cover rounded-lg"
            />
            
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <a
              href={previewUrl}
              className="flex items-center text-white hover:text-white/50 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Project
              <GoArrowUpRight className="ml-1" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
