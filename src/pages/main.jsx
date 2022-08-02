import { useState } from "react";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import Report from "../components/report";
import Information from "../components/information";
import Navigation from "../components/navigation";
import Images from "../images";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex">
        <div className={`${hide ? "hide-menu" : "show-menu"} z-50 bg-primary`}>
          <div className="w-full p-5">
            <div className="flex justify-between items-center">
              <img className="w-[8rem] h-[3rem]" src={Images.logo} alt="" />
              <img onClick={() => setHide(true)} className="lg:hidden w-[2rem] h-[2rem]" src={Images.back} alt="" />
            </div>
            <div className="font-bold mt-12 text-white text-lg">INFUSE</div>
            <div className="text-white">Integrated Fund System Management</div>
            <div className="flex flex-col text-white mt-12 gap-5">
              <Navigation title="Home" icon={Images.home} active={active} setActive={setActive} />
              <Navigation title="Dashboard" icon={Images.dashboard} active={active} setActive={setActive} />
              <Navigation title="Report" icon={Images.report} active={active} setActive={setActive} />
              <Navigation title="Information Management" icon={Images.info} active={active} setActive={setActive} />
            </div>
          </div>
        </div>
        <div className="w-full max-h-screen pb-12 md:pb-0" style={{ overflowY: "auto" }}>
          <div className="w-full flex p-5 justify-between">
            <img onClick={() => setHide(!hide)} className="w-[2rem] h-[2rem] cursor-pointer" src={Images.menu} alt="" />
            <img onClick={() => navigate("/")} className="w-[2rem] h-[2rem] cursor-pointer" src={Images.exit} alt="" />
          </div>
          <div className="mt-6 px-5">
            {active === "Home" && <Home />}
            {active === "Dashboard" && <Dashboard />}
            {active === "Report" && <Report />}
            {active === "Information Management" && <Information />}
          </div>
        </div>
      </div>
      <footer className="w-full bg-primary p-3">
        <div className="font-semibold text-white">All Rights Reserved. PT. Bank Negara Indonesia (Persero) Tbk @2022</div>
      </footer>
    </>
  );
}

export default Main;
