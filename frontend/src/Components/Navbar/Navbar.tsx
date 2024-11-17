import Logo from "../../assets/logo/pingputali.jpg";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[var(--dark-background)] dark:bg-var(--body-bg-dark) transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="sm:w-[5rem]  w-[4rem] h-[4rem] sm:h-[5rem] rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={Logo} alt="logo" />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex text-lg items-center gap-8 text-[var(--light-text)] ">
        <li className="relative group ">
          <a
            href="/"
            className=" hover:text-[var(--hover-color)] transition duration-300"
          >
            Home
          </a>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <a
            href="/menu"
            className="hover:text-[var(--hover-color)] transition duration-300"
          >
            Menu
          </a>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <a
            href="/about"
            className="hover:text-[var(--hover-color)] transition duration-300"
          >
            About
          </a>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <a
            href="/event"
            className="hover:text-[var(--hover-color)] transition duration-300"
          >
            Event
          </a>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--hover-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      </ul>

      {/* Optional Call to Action Button */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="/reservation"
          className="px-6 py-3 text-white bg-[var(--primary-color)] rounded-full hover:bg-[#ff5580] transition duration-300"
        >
          Reserve Now
        </a>
      </div>
    </nav>
  );
};
