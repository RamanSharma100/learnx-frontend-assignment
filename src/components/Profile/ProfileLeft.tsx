import { useState, type FC } from "react";
import { FaUsers, FaPlus } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { GoInfo } from "react-icons/go";

import { Avatar } from "../../assets";
import { classNames } from "../../utils";
import Chart from "./Chart";

import "./index.css";

const ProfileLeft: FC = () => {
  const [publicProfile, setPublicProfile] = useState<boolean>(true);

  return (
    <div className="w-[24rem] flex items-center h-full bg-white shadow flex-col relative">
      <div className="w-full flex flex-col relative items-center">
        <div className="flex items-center justify-center absolute bg-white rounded-full -top-[4.5rem] h-[12.5rem] w-[12.5rem]">
          <img
            src={Avatar}
            alt="avatar"
            className="w-48 h-48 rounded-full object-cover self-center"
          />
        </div>

        <p className="text-lg text-secondary relative font-semibold mt-36">
          Ayaat Khanna
        </p>
        <p className="text-sm text-secondary text-opacity-30 relative font-normal mt-1">
          UI/UX Designer
        </p>

        <div className="w-full flex items-center justify-center mt-1">
          <p className="flex items-center justify-center text-sm text-secondary text-opacity-30 relative font-normal mt-1">
            <FaUsers className="text-secondary h-6 w-6" />
            <span className="ml-2 text-secondary"> 21 followers</span>
          </p>

          <p className="flex items-center justify-center text-sm text-secondary text-opacity-95 relative font-normal mt-1 ml-3">
            43 following
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-full flex items-center  gap-3 px-5 pr-7 justify-between">
          <p className="text-sm text-secondary text-opacity-100 relative font-medium ">
            Make my profile visible to employers
          </p>
          <Switch
            checked={publicProfile}
            onChange={setPublicProfile}
            className={classNames(
              publicProfile ? "bg-primary" : "bg-gray-200",
              "relative inline-flex ml-4 h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                publicProfile ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
        <p className="text-xs text-secondary text-opacity-30 pl-5 pr-7  relative font-normal mt-2">
          Your profile and career goals will appear when employers search our
          database for candidates.
        </p>
      </div>

      <div className="w-full flex flex-col items-center mt-16">
        <div className="w-full flex items-center  gap-3 justify-between px-5 pr-7">
          <p className="text-base text-secondary text-opacity-100 relative font-medium ">
            Online Links
          </p>

          <div className="w-6 h-6 p-2 rounded-full cursor-pointer flex items-center bg-primary justify-between mt-1">
            <FaPlus className="text-white h-5 w-5" />
          </div>
        </div>
        <p className="text-xs text-secondary text-opacity-30 pl-5 pr-7 py-1 relative font-normal mt-1">
          Add your online portfolio links to increase your profile strength.
        </p>

        <div className="w-full flex items-center  justify-center px-5 pr-7 mt-10">
          <div className="w-full flex items-center bg-[#F6F9FE] rounded-xl h-20 gap-8 justify-center">
            <img
              src={
                "data:image/png;base64,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"
              }
              alt="avatar"
              className="w-10 h-8"
            />
            <img
              src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              alt="avatar"
              className="w-8 h-8"
            />
            <img
              src={
                "data:image/png;base64,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"
              }
              alt="avatar"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden  pb-5 flex px-7 mt-16">
        <div className="w-full relative  pb-5 flex px-5 bg-primary bg-opacity-10 border-2 border-opacity-70 flex-col rounded-xl items-center">
          <p className="text-base text-secondary mb-5 flex gap-5 items-center justify-center text-opacity-100 relative font-medium mt-5">
            Wheel of Opportunities
            <GoInfo className="text-secondary h-4 w-4 cursor-pointer" />
          </p>

          <Chart />

          <div className="absolute flex-col mt-8 gap-2 top-2/4 text-center -translate-y-1/2 flex items-center justify-center">
            <p className="text-6xl z-50 text-secondary text-opacity-95 relative font-bold mt-1">
              350
            </p>
            <p className="text-lg z-50 text-secondary text-opacity-95 relative font-medium mt-1 ml-2">
              Sphere Rating
            </p>
          </div>
        </div>
      </div>

      <div className="w-full pb-5 flex flex-col px-7 items-start justify-start mt-10">
        <p className="text-base text-secondary text-opacity-100 relative font-medium ">
          Your Ranking
        </p>

        <div className="w-full border border-slate-300 flex items-center rounded-full gap-3 justify-between px-2 py-2 bg-slate-200 mt-5">
          <div
            className="w-[83%] flex relative items-center h-4 gap-3 rounded-xl justify-end"
            style={{
              background: "linear-gradient(to left, #5c258d, #4389a2)",
            }}
          >
            <div className="w-6 h-6 rounded-full bg-[#5C258D]" />
          </div>
        </div>

        <p className="text-base text-secondary text-center  w-full text-opacity-100 relative font-medium mt-5">
          Hurray! You are in the top{" "}
          <span className="text-primary text-2xl font-semibold">27%</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileLeft;
