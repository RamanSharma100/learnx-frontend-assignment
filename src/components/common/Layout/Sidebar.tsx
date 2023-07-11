import ROUTES from "../../../routes";
import type { Route } from "../../../types";
import { LogoIcon } from "../../../assets/index";
import { useState, type FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: FC = () => {
  const [active, setActive] = useState<string>("/");

  const { pathname } = useLocation();

  useEffect(() => {
    setActive(window.location.pathname);
  }, [pathname]);

  return (
    <div className="w-[17rem] border-r flex flex-col h-screen border-r-slate-200">
      <div className="w-full flex items-center justify-start px-10 shadow-md py-2 bg-white">
        <img src={LogoIcon} alt="Logo" className="w-10 mt-0.5 h-11" />
        <p className="text-2xl font-normal text-text">spehre</p>
      </div>
      <div className="w-full flex flex-col items-start  justify-start px-3 py-5">
        {ROUTES.map((route: Route, index: number) => (
          <Link
            key={index + Math.random() * 2457}
            to={route.path}
            className={`w-full flex p-2 my-1 items-center group justify-start py-2 transition-all hover:bg-slate-100 rounded-md
            ${active === route.path && `bg-slate-100`}
            `}
          >
            <route.icon
              className={`w-8 h-8 mr-3 font-semibold text-primary transition-opacity group-hover:text-opacity-100
              ${!(active === route.path) && `text-opacity-50`}
            `}
            />
            <p
              className={`text-secondary font-medium text-base group-hover:text-opacity-100
              ${!(active === route.path) && `text-opacity-50`}`}
            >
              {route.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="w-[14rem] mx-auto h-0.5 mt-5 bg-slate-200 my-10" />
    </div>
  );
};

export default Sidebar;
