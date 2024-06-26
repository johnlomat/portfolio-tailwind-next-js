// components/NavMenu.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (isClient && window.innerWidth < 768) {
      toggleMenu(); // Close the menu on mobile screens
    }
  };

  return (
    <div
      className={`${isMenuOpen ? "block" : "hidden"} absolute right-4 top-4 z-20 w-[90%] max-w-[18.75rem] md:relative md:right-0 md:top-0 md:block md:w-auto md:max-w-full`}
    >
      <button
        onClick={toggleMenu}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 focus:outline-none md:hidden"
      >
        <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
      </button>
      <ul className="flex-col items-center space-x-0 space-y-4 rounded-lg bg-white p-6 font-montserrat shadow-lg md:flex md:flex-row md:space-x-12 md:space-y-0 md:rounded-none md:bg-transparent md:p-0 md:shadow-none 2xl:space-x-20">
        <li>
          <Link
            href="#about-me"
            className="cursor-pointer font-bold text-[#212121] hover:text-gray-300 md:text-white"
            onClick={handleClick}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="cursor-pointer font-bold text-[#212121] hover:text-gray-300 md:text-white"
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="cursor-pointer font-bold text-[#212121] hover:text-gray-300 md:text-white"
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#contact-me"
            className="cursor-pointer font-bold text-[#212121] hover:text-gray-300 md:text-white"
            onClick={handleClick}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
