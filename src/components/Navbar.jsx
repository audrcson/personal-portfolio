import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareDots } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { IoFileTrayStacked } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-3/4 bg-[#266ca9]/20 h-[56px] backdrop-blur-2xl rounded-full 
        max-w-[400px] mx-auto px-5 items-center justify-between flex text-2xl text-[#266ca9]/80">
          <Link
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link >
          <Link
            to="skills"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <FaRegLightbulb />
          </Link >
          <Link
            to="projects"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <IoFileTrayStacked />
          </Link>
          <Link
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquareDots />
          </Link>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;