import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import CollegeLogo from "../../assets/logo/pingputali.jpg";
import { useTranslation } from "react-i18next";
import React from "react";
import { useSuscribeFn } from "../../Hook/useSuscribe";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const {
    followUs,
    quickContact,
    address: { location, city },
    phone,
    email,
    openingHour,
    openingTime,
    quickLinks,
    links: {
      home,
      inquiry,
      aboutUs,
      event,
      resources,
      terms,
      privacy,
      subscribe,
    },
    copyright,
    developedBy,
    saroj,
    aayush,
    and,
  } = t("footer") as any;

  const { mutate, email: mail, isLoading, setEmail: setMail } = useSuscribeFn();

  return (
    <div className="flex flex-col w-full text-white px-2 ">
      <footer className="w-full mt-16  rounded-t bg-white border-[1px] border-[var(--border-color)] text-black  place-items-center grid px-5">
        <div className="flex  items-center justify-between w-full gap-5 sm:p-3 border-b-4 border-b-[var(--border-color)] ">
          <div className="px-5 py-3   text-[var(--primary-text)] rounded">
            <img src={CollegeLogo} alt="logo" className="max-h-[60px] sm:scale-[1.3] scale-[1.1] rounded-full " />
          </div>
          <div className="flex flex-col text-[var(--primary-text)] items-center justify-center gap-3">
            <p className="text-lg font-bold  tracking-wide ">{followUs} </p>
            <div className="flex items-center gap-9">
              <a
                aria-label="go to facebook"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61568590761738"
              >
                <Facebook className="sm:size-6 size-5 duration-150 hover:text-[var(--secondary-color)] " />
              </a>
              <a
                aria-label="go to instagram"
                href="https://www.instagram.com/pinkputali/"
                target="_blank"
              >
                <Instagram className="sm:size-6 size-5 duration-150 hover:text-[var(--secondary-color)] " />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex lg:gap-x-40 2xl:justify-evenly  text-[var(--primary-text)] justify-start flex-wrap w-full  ">
          <div className="flex lg:col-span-1 sm:col-span-2 col-span-3 flex-col gap-6 px-5 py-8 ">
            <p className="font-bold tracking-wider">{quickContact}</p>
            <div className="flex flex-col gap-5">
              <div className="flex  items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] text-[var(--primary-text)] rounded-full flex items-center justify-center">
                  <MapPin />
                </div>
                <div>
                  <p>{location}</p>
                  <p>{city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--primary-text)]  flex items-center justify-center flex-wrap">
                  <Phone />
                </div>
                <div>
                  <p>{phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--primary-text)]  flex items-center justify-center">
                  <Mail />
                </div>
                <div>
                  <a
                    href="mailto:inquiry@texascollege.edu.np"
                    className="break-all text-wrap"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--primary-text)]  flex items-center justify-center">
                  <Clock />
                </div>
                <div>
                  <p>{openingHour}</p>
                  <p>{openingTime} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 px-5 py-8">
            <p className="font-bold tracking-wider">{quickLinks}</p>
            <div className="flex  flex-col gap-3 text-sm text-[var(--primary-text)] ">
              <Link
                to="/"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                {home}
              </Link>
              <a
                href="#inquiry"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                {inquiry}
              </a>
              <Link
                to="/about"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                {aboutUs}
              </Link>{" "}
              <Link
                to="/event"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                {event}
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:col-span-1 col-span-2 items-start gap-5 px-5 py-8">
            <p className="font-bold tracking-wider">{resources}</p>
            <div className="flex flex-col gap-5 text-sm text-[var(--primary-text)] ">
              <a
                href="#"
                target="_blank"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                {terms}
              </a>
              <a
                target="_blank"
                href="#"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                {privacy}
              </a>
            </div>
          </div>
          {/* suscriber */}
          <div className="flex  lg:col-span-1 col-span-2 flex-col items-start gap-5 px-5 py-8">
            <p className="font-bold tracking-wider">{subscribe}</p>
            <form
              onSubmit={mutate}
              className="flex group/form border-[2px] ring-[var(--primary-color)] hover:ring-2 border-[var(--border-color)] rounded-lg text-[var(--primary-text)]  justify-center  w-full"
            >
              <input
                required
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                id="subscribe"
                type="email"
                placeholder={"eg. abc@gmail.com"}
                className="w-full  p-3.5 rounded-l-lg  outline-none"
              />
              <button
                type="submit"
                className="py-[0.95rem]  border-0  px-3  rounded-r-lg  "
              >
                {isLoading ? (
                  <ReactLoading type="spin" color="white" width={"28px"} height={"28px"} />
                ) : (
                  <ChevronRight className="size-6" />
                )}
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="w-full flex justify-between flex-col md:flex-row py-4 px-5 text-sm text-[var(--primary-text)] gap-3 items-center">
        <p>{copyright}</p>
        <p className="cursor-pointer">
          {developedBy}{" "}
          <a
            href="https://saroj-gt.web.app/"
            target="_blank"
            className="hover:text-[var(--primary-color)]  hover:underline "
          >
            {saroj}
          </a>{" "}
          {and}{" "}
          <a
            href="https://aayush-al.web.app/"
            target="_blank"
            className="hover:text-[var(--primary-color)]  hover:underline"
          >
            {aayush}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
