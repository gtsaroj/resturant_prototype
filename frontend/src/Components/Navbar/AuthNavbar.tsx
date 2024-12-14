import Logo from "../../assets/logo/Logo.png";
import { CiForkAndKnife } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export const AuthNavbar = () => {
  return (
    <div className=" w-full  flex items-center justify-between px-8 h-[110px] bg-white ">
      <div className=" flex gap-2 items-center justify-center">
        <button className=" border-[1px] rounded-full border-[var(--secondary-color)] p-2 ">
          <CiForkAndKnife className=" size-5 " />
        </button>
        <p className="flex items-start text-xs flex-col justify-center">
          <span>inquiry@pinkputali.com</span>
          <span>+977-9812678219</span>
        </p>
      </div>
      <div className=" w-[222px] h-[70px] mt-2  ">
        <img className="w-full h-full" src={Logo} alt="pink putali" />
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <button className=" rounded-full border-[1px] border-[var(--secondary-color)] p-2 ">
          <CiLocationOn className=" size-5 " />
        </button>
        <span className="text-xs ">New Baneshowr, Kathmandu</span>
      </div>
    </div>
  );
};
