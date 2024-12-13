import Logo from "../../assets/logo/Logo.png";
export const AuthNavbar = () => {
  return (
    <div className=" w-full  flex items-center justify-center h-[120px] bg-white ">
      <div className=" max-w-[400px] h-[80px] pt-[23px] ">
        <img className="w-full h-full" src={Logo} alt="pink putali" />
      </div>
    </div>
  );
};
