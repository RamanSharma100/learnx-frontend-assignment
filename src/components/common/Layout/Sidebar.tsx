import { type FC } from "react";
import { LogoIcon } from "../../../assets/index";

const Sidebar: FC = () => {
  return (
    <div className="w-1/6 border-r flex flex-col h-screen border-r-slate-200">
      <div className="w-full flex items-center justify-start px-10 shadow-md py-4 bg-white">
        <img src={LogoIcon} alt="Logo" className="w-10 mt-0.5 h-12" />
        <p className="text-2xl font-normal text-text">spehre</p>
      </div>
    </div>
  );
};

export default Sidebar;
