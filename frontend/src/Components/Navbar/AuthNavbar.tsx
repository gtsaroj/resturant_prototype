import Logo from "../../assets/logo/Logo.png";
import { CiForkAndKnife } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const AuthNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full  flex items-center  justify-center sm:justify-between sm:px-3 md:px-8 h-[70px] sm:h-[110px] bg-white ">
      <div className=" hidden sm:flex gap-2 items-center justify-center">
        <button className=" border-[1px] rounded-full border-[var(--secondary-color)] p-2 ">
          <CiForkAndKnife className=" size-5 " />
        </button>
        <p className="flex items-start text-xs flex-col justify-center">
          <span>inquiry@pinkputali.com</span>
          <span>+977-9812678219</span>
        </p>
      </div>
      <div
        onClick={() => navigate("/")}
        className=" cursor-pointer sm:w-[222px] w-[150px] h-[50px] sm:h-[70px] mt-2  "
      >
        <img className="w-full h-full" src={Logo} alt="pink putali" />
      </div>
      <div className=" hidden sm:flex gap-2 items-center justify-center">
        <button className=" rounded-full border-[1px] border-[var(--secondary-color)] p-2 ">
          <CiLocationOn className=" size-5 " />
        </button>
        <span className="text-xs ">New Baneshowr, Kathmandu</span>
      </div>
    </div>
  );
};
