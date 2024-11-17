import { MenuSquare, X } from "lucide-react";
import Logo from "../../assets/logo/pingputali.jpg";
import React, { useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

export const NavbarContainer = () => {
  return (
    <ul className="flex sm:flex-row flex-col text-lg items-center  sm:justify-center pt-10 sm:pt-0 gap-14 sm:gap-8 text-[var(--light-text)] ">
      <li className="relative group ">
        <Link
          to="/"
          className=" hover:text-[var(--hover-color)] transition duration-300"
        >
          Home
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </li>
      <li className="relative group">
        <Link
          to="/menu"
          className="hover:text-[var(--hover-color)] transition duration-300"
        >
          Menu
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </li>
      <li className="relative group">
        <Link
          to="/about"
          className="hover:text-[var(--hover-color)] transition duration-300"
        >
          About
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </li>
      <li className="relative group">
        <Link
          to="/event"
          className="hover:text-[var(--hover-color)] transition duration-300"
        >
          Event
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </li>
    </ul>
  );
};

export const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const navbarRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflowY = "hidden";
      document.addEventListener("mousedown", closeModal);
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[var(--dark-background)] dark:bg-var(--body-bg-dark) transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="sm:w-[4rem]  w-[3rem] h-[3rem] sm:h-[4rem] rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={Logo} alt="logo" />
        </div>
      </div>
      <div className="hidden sm:flex ">
        <NavbarContainer />
      </div>
      <div ref={navbarRef} className="relative  flex sm:hidden ">
        <button
          onClick={() => setOpen(!open)}
          className=" bg-transparent hover:bg-transparent border-none "
        >
          {open ? <X className="size-7" /> : <CiMenuFries className=" size-7" />}
        </button>
        <div
          className={` flex flex-col items-center pt-9 gap-[3.5rem]  justify-stretch bottom-0 duration-150 bg-[var(--dark-background)] w-[15rem]   z-50 h-screen  fixed top-0 ${
            open ? "right-[-30px] visible " : "right-[-1000px] invisible "
          } `}
        >
          <div className="flex w-full justify-end px-10  items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className=" bg-transparent hover:bg-transparent border-none "
            >
              {open ? (
                <X className="size-7" />
              ) : (
                <MenuSquare className=" size-7" />
              )}
            </button>
          </div>
          <NavbarContainer />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <Link
          to="/reservation"
          className="px-6 py-3 text-white bg-[var(--primary-color)] rounded-full hover:bg-[#ff5580] transition duration-300"
        >
          Reserve Now
        </Link>
      </div>
    </nav>
  );
};
