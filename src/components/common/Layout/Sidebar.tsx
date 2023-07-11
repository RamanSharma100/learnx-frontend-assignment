import ROUTES from "../../../routes";
import type { CommunityFeedsType, Route } from "../../../types";
import { LogoIcon } from "../../../assets";
import { useState, type FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AvatarGenerator } from "random-avatar-generator";
import { COMMUNITIES_FEED } from "../../../data";
import { FaChevronRight } from "react-icons/fa";

const Sidebar: FC = () => {
  const [active, setActive] = useState<string>("/");
  const [communities, setCommunities] = useState<CommunityFeedsType[]>(
    COMMUNITIES_FEED.slice(0, 5)
  );

  const { pathname } = useLocation();
  const generator = new AvatarGenerator();

  useEffect(() => {
    setActive(window.location.pathname);
  }, [pathname]);

  return (
    <div className="w-[17rem] border-r flex flex-col h-[92.6rem] overflow-hidden relative border-r-slate-200">
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
      <div className="w-full flex mt-3 flex-col items-start  justify-start px-3 py-5">
        <div className="w-[14rem] mx-auto h-0.5 mt-5 bg-slate-200 my-10" />
        <p className="text-secondary font-semibold text-lg text-center w-full pr-10 mb-5">
          Communities Feed
        </p>
        <div className="w-full flex  flex-col items-center justify-between px-3 pr-5">
          {communities.map((community: CommunityFeedsType, index: number) => (
            <div
              key={index + Math.random() * 2457}
              className="w-full flex items-center justify-start py-2 mr-4"
            >
              <img
                src={generator.generateRandomAvatar(community.name)}
                alt="Avatar"
                className="w-14 h-14 rounded-full"
              />
              <div className="flex flex-col w-48 pr-5 ml-3">
                <p className="text-secondary truncate  font-medium text-base">
                  {community.name}
                </p>
                <p className="text-secondary font-normal text-opacity-70 text-sm">
                  {community.members} members
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* show more ... */}
        <div className="w-full flex items-center justify-center py-2 mr-4">
          <p className="text-secondary  flex  items-center font-medium cursor-pointer text-opacity-75 text-sm mt-4">
            Show 5 more <FaChevronRight className="w-3 h-3 ml-2" />
          </p>
        </div>
      </div>

      <footer className="w-full flex flex-col items-center justify-center absolute bottom-6">
        <div className="flex w-full items-center my-2 gap-3 justify-center">
          {["About", "Accessibility", "Help"].map(
            (item: string, index: number) => (
              <Link
                to={"/" + item.toLowerCase().replace(" ", "-").replace("&", "")}
                key={index + Math.random() * 2457}
                className="text-secondary cursor-pointer hover:text-opacity-95 font-normal text-opacity-70 text-xs "
              >
                {item}
              </Link>
            )
          )}
        </div>
        <div className="flex w-full items-center my-2 mb-3  gap-3 justify-center">
          {["Privacy & terms", "Advertise", "more"].map(
            (item: string, index: number) => (
              <Link
                to={
                  "/" +
                  item.toLowerCase().replace(" ", "-").replace("& ", "").trim()
                }
                key={index + Math.random() * 2457}
                className="text-secondary font-normal cursor-pointer hover:text-opacity-95 text-opacity-70 text-xs "
              >
                {item}
              </Link>
            )
          )}
        </div>
        <p className="text-secondary font-normal mt-3 flex items-center gap-2 text-opacity-70 text-sm">
          <span className="text-primary font-semibold  text-lg">sphere.io</span>
          @ {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
