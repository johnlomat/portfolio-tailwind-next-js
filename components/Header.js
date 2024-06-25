// components/Header.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Assuming md breakpoint is 768px (adjust as per your Tailwind CSS config)
        setIsMenuOpen(false); // Close the menu if screen size is md or larger
        document.body.style.overflow = "unset"; // Restore body scroll
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    if (isMenuOpen) {
      // Body scroll lock
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-[#969696] xl:bg-transparent py-4 w-full static md:absolute z-10">
      <nav className="flex items-center justify-between container mx-auto">
        <div className="flex items-center w-full md:w-auto max-w-[4.375rem] md:max-w-full">
          <Link href="/" className="text-white text-xl">
            <Image src="/images/john-logo.svg" alt="John Lomat logo" width={100} height={62} className="brightness-[100] md:brightness-0" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && <div className="fixed z-10 inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" onClick={toggleMenu}></div>}

        <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
