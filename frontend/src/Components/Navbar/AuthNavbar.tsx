import Logo from "../../assets/logo/Logo.png";
export const AuthNavbar = () => {
  return (
    <div className=" w-full  flex items-center justify-center h-[150px] bg-white ">
      <div className=" w-[250px] h-[100px] pt-[23px] ">
        <img className="w-full h-full" src={Logo} alt="pink putali" />
      </div>
    </div>
  );
};
