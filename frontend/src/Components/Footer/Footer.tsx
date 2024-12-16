import React from "react";
import Logo from "../../assets/logo/pink_putali-logo_main.png";
import {
  Cake,
  Clock,
  Mail,
  MapPinPlusInside,
  Music4Icon,
  PartyPopper,
  Phone,
  Users2,
} from "lucide-react";
import Facebook from "../../assets/icons/facebook.png";
import Messenger from "../../assets/icons/messenger.png";
import Viber from "../../assets/icons/viber.png";
import Whatsapp from "../../assets/icons/whatsapp.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-full p-5 bg-[#f8f1ea] mt-5">
      <div className="grid items-center grid-cols-1 gap-12 px-5 py-10 md:grid-cols-3">
        <div className="flex flex-col gap-8 mx-auto">
          <div className="flex flex-col gap-5 py-5 ">
            <h4 className="text-xl font-semibold tracking-wider">
              Want to visit us?
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<MapPinPlusInside />} />
                <p>New Baneshwor, Kathmandu</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<Phone />} />
                <p>01-4589134, 01-4588627, 9801644462</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<Mail />} />
                <p>inquiry@putalipink.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-semibold tracking-wider">
              Opening Hours
            </h4>
            <div className="flex items-center gap-3 ">
              <FooterIcon icon={<Clock />} />
              <p className="text-lg">10:00 AM - 09:00 PM</p>
            </div>
          </div>
        </div>
        <img
          src={Logo}
          alt="Pink Putali"
          className="flex w-full h-full max-w-[450px] max-h-[450px] min-w-[250px] min-h-[200px] place-self-center lg:place-self-start items-center"
        />
        <div className="flex flex-col gap-8 mx-auto">
          <div className="flex flex-col gap-5 py-5 ">
            <h4 className="text-xl font-semibold tracking-wider">
              We are known for
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<Cake />} />
                <p>Birthday and Anniversary</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<Users2 />} />
                <p>Friends and Family Gathering</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<PartyPopper />} />
                <p>Events and Parties</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FooterIcon icon={<Music4Icon />} />
                <p>Music and Performance</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-semibold tracking-wider">
              Connect with Us
            </h4>
            <div className="flex flex-wrap gap-8">
              <img
                src={Facebook}
                alt="Facebook"
                className="cursor-pointer size-10"
              />
              <img
                src={Messenger}
                alt="Messenger"
                className="cursor-pointer size-10"
              />
              <img src={Viber} alt="Viber" className="cursor-pointer size-10" />
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="cursor-pointer size-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  text-[16px] justify-center w-full px-5 py-3">
        <p>
          Designed and Developed by
          <a
            href="https://aayush-al.web.app/"
            target="_blank"
            className=" hover:text-[#FF3864] hover:underline"
          >
            {" "}
            Aayush{" "}
          </a>
          and
          <a
            href="https://saroj-gt.web.app/"
            target="_blank"
            className="hover:text-[#FF3864] hover:underline "
          >
            {" "}
            Saroj{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

export const FooterIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="w-10 h-10 p-2 rounded-full bg-[#FC7995] text-[#fff] flex items-center justify-center">
      {icon}
    </div>
  );
};

/*
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

 <div className="flex flex-col w-full px-2 text-white ">
      <footer className="w-full mt-16  rounded-t bg-white border-[1px] border-[var(--border-color)] text-black  place-items-center grid px-5">
        <div className="flex  items-center justify-between w-full gap-5 sm:p-3 border-b-4 border-b-[var(--border-color)] ">
          <div className="px-5 py-3   text-[var(--primary-text)] rounded">
            <img src={CollegeLogo} alt="logo" className="max-h-[60px] sm:scale-[1.3] scale-[1.1] rounded-full " />
          </div>
          <div className="flex flex-col text-[var(--primary-text)] items-center justify-center gap-3">
            <p className="text-lg font-bold tracking-wide ">{followUs} </p>
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
          <div className="flex flex-col col-span-3 gap-6 px-5 py-8 lg:col-span-1 sm:col-span-2 ">
            <p className="font-bold tracking-wider">{quickContact}</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-sm">
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
          <div className="flex flex-col items-start col-span-2 gap-5 px-5 py-8 sm:col-span-1">
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
      
          <div className="flex flex-col items-start col-span-2 gap-5 px-5 py-8 lg:col-span-1">
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
*/
