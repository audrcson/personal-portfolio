import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-white text-[#266ca9] border-[#266ca9]"
    : "bg-[#266ca9] text-white border-[#266ca9] hover:bg-white hover:text-[#266ca9]"; // Jika tidak dipilih

  return (
    <button
      className={`${buttonStyles} rounded-xl border-2 px-4 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
