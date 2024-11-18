import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import CollegeLogo from "../../assets/logo/pingputali.jpg";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-white px-2 ">
      <footer className="w-full mt-16  rounded-t bg-white border-[1px] border-[var(--border-color)] text-black  place-items-center grid px-5">
        <div className="flex flex-col items-center justify-between w-full gap-5 p-3 border-b-4 border-b-[var(--border-color)] sm:flex-row">
          <div className="px-5 py-3 bg-[var(--light-background)]  text-[var(--primary-text)] rounded">
            <img src={CollegeLogo} alt="logo" className="max-h-[60px] " />
          </div>
          <div className="flex flex-col text-[var(--primary-text)] items-center justify-center gap-3">
            <p className="text-lg font-bold  tracking-wide ">Follow us: </p>
            <div className="flex items-center gap-9">
              <a
                aria-label="go to facebook"
                target="_blank"
                href="https://www.facebook.com/texasintlcollege"
              >
                <Facebook className="sm:size-6 size-5 duration-150 hover:text-[var(--secondary-color)] " />
              </a>
              <a
                aria-label="go to instagram"
                href="https://www.instagram.com/texasinternationalcollege/"
                target="_blank"
              >
                <Instagram className="sm:size-6 size-5 duration-150 hover:text-[var(--secondary-color)] " />
              </a>
              <a
                aria-label="go to linkedin"
                href="https://www.linkedin.com/company/texas-college-of-management-it/"
                target="_blank"
              >
                <Linkedin className="sm:size-6 size-5 duration-150 hover:text-[var(--secondary-color)] " />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex lg:gap-x-20  text-[var(--primary-text)] justify-start flex-wrap w-full  ">
          <div className="flex lg:col-span-1 sm:col-span-2 col-span-3 flex-col gap-6 px-5 py-8 ">
            <p className="font-bold tracking-wider">Quick Contact</p>
            <div className="flex flex-col gap-5">
              <div className="flex  items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] text-[var(--primary-text)] rounded-full flex items-center justify-center">
                  <MapPin />
                </div>
                <div>
                  <p>New baneshwor</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--primary-text)]  flex items-center justify-center flex-wrap">
                  <Phone />
                </div>
                <div>
                  <p>01-4589134, 01-4588627, 9801644462</p>
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
                    inquiry@putalipink.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--primary-text)]  flex items-center justify-center">
                  <Clock />
                </div>
                <div>
                  <p>Opening Hour</p>
                  <p>06:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 px-5 py-8">
            <p className="font-bold tracking-wider">Quick Links</p>
            <div className="flex  flex-col gap-3 text-sm text-[var(--primary-text)] ">
              <a
                href="/"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                Home
              </a>
              <a
                href="/"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                Inquiry
              </a>
              <a
                href="/"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                About us
              </a>{" "}
              <a
                href="/"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                Event
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:col-span-1 col-span-2 items-start gap-5 px-5 py-8">
            <p className="font-bold tracking-wider">Resources</p>
            <div className="flex flex-col gap-5 text-sm text-[var(--primary-text)] ">
              <a
                href="/"
                target="_blank"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                Terms & Condition
              </a>
              <a
                target="_blank"
                href="/"
                className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          {/* suscriber */}
          <div className="flex  lg:col-span-1 col-span-2 flex-col items-start gap-5 px-5 py-8">
            <p className="font-bold tracking-wider">Suscribe</p>
            <form className="flex  rounded-xl text-[var(--primary-text)]  justify-center  w-full">
              <input
                id="subscribe"
                type="email"
                placeholder="Enter your email..."
                className="w-full   border-[1px] border-r-0 border-[var(--border-color)]  p-3.5 rounded-l-lg  outline-none"
              />
              <button
                type="submit"
                className="py-[0.90rem]  border-r-[1px] border-[var(--border-color)]   px-3  rounded-r-lg  "
              >
                <ChevronRight />
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="w-full flex justify-between flex-col md:flex-row py-4 px-5 text-sm text-[var(--primary-text)] gap-3 items-center">
        <p>Copyright © 2024 All Rights Reserved.</p>
        <p className="cursor-pointer">
          Developed By:{" "}
          <a
            href="https://saroj-gt.web.app/"
            target="_blank"
            className="hover:text-[var(--primary-color)]  hover:underline "
          >
            Saroj
          </a>{" "}
          and{" "}
          <a
            href="https://aayush-al.web.app/"
            target="_blank"
            className="hover:text-[var(--primary-color)]  hover:underline"
          >
            Aayush.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
