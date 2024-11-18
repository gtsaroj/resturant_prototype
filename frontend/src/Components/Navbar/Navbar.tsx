import { MenuSquare, X } from "lucide-react";
import Logo from "../../assets/logo/pingputali.jpg";
import React, { useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const NavbarContainer = ({ action }: { action?: () => void }) => {
  const navbarData = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "Menu",
      pathname: "/menu",
    },
    {
      name: "About",
      pathname: "/about",
    },
    {
      name: "Event",
      pathname: "/event",
    },
  ];

  const { pathname } = useLocation();
  return (
    <ul className="flex sm:flex-row flex-col text-lg items-center  sm:justify-center pt-10 sm:pt-0 gap-10 sm:gap-8 text-[var(--light-text)] ">
      {navbarData?.map((data) => (
        <li className="relative group ">
          <Link
            onClick={() => action && action()}
            to={data.pathname}
            className={`hover:text-[var(--secondary-color)] sm:text-[1rem] text-[16px] ${
              pathname === data.pathname ? "text-[var(--secondary-color)] " : ""
            } transition duration-300`}
          >
            {data.name}
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--secondary-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  const navbarRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const scrollerDetect = () => {
      if (window.scrollY >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollerDetect);
    return () => {
      window.removeEventListener("scroll", scrollerDetect);
    };
  }, []);

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

  const navigate = useNavigate();

  return (
    <nav
      className={`w-full  
          ${isScrolled ? "fixed  -top-20    translate-y-20  " : " -translate-y-0 static"}
            z-[1000]   translate-y-[-2px] shadow-sm shadow-black 
      
       flex items-center justify-between px-6 py-4 bg-[var(--dark-background)] transition-all duration-300`}
    >
      {/* Logo Section */}
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center gap-4"
      >
        <div className="sm:w-[4rem]  w-[3rem] h-[3rem] sm:h-[4rem] rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={Logo} alt="logo" />
        </div>
      </div>
      <div className="hidden sm:flex ">
        <NavbarContainer />
      </div>
      {/* mobile navbar */}
      <div ref={navbarRef} className="relative  flex sm:hidden ">
        <button
          onClick={() => setOpen(!open)}
          className=" bg-transparent hover:bg-transparent border-none "
        >
          {open ? (
            <X className="size-7" />
          ) : (
            <CiMenuFries className=" size-7" />
          )}
        </button>
        <div
          className={` flex flex-col items-center pt-6   justify-stretch bottom-0 duration-150 bg-[var(--dark-background)] w-[13rem]   z-[100] h-screen  fixed top-6 ${
            open ? "right-[0px] visible " : "right-[-1000px] hidden "
          } `}
        >
          <div className="flex flex-col w-full justify-end  items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className=" pr-2 pb-5 w-full flex items-center justify-end bg-transparent hover:bg-transparent border-none "
            >
              {open ? (
                <X className="size-7" />
              ) : (
                <MenuSquare className=" size-7" />
              )}
            </button>
            <div
              onClick={() => navigate("/")}
              className="w-full  cursor-pointer flex flex-col items-center justify-center gap-3 border-b-[1px] pb-4 border-gray-900 "
            >
              <div className="size-[60px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Logo}
                  alt="logo"
                />
              </div>
              <h1 className=" text-sm  text-white ">Pink putali Restaurant</h1>
            </div>
          </div>
          <NavbarContainer action={() => setOpen(!open)} />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="#"
          className="px-6 py-3 text-white bg-[var(--primary-color)] rounded-full hover:bg-[var(--secondary-dark)] transition duration-300"
        >
          Reserve Now
        </a>
      </div>
    </nav>
  );
};
