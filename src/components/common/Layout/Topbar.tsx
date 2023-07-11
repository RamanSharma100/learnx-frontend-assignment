import { useState, type FC } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { Avatar } from "../../../assets";

interface ITopbarProps {}

const Topbar: FC<ITopbarProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex items-center justify-end py-[0.75rem] px-10 bg-white gap-5 shadow">
      <div className="w-[22rem] border border-text p-1 py-[0.4rem] border-opacity-30 rounded h-[2.4rem] flex items-center">
        <FaSearch className="text-text text-opacity-95 h-6 font-extralight w-6 ml-2 " />
        <div className="w-[0.1rem] mx-2 h-full bg-text bg-opacity-40" />
        <input
          type="text"
          className="w-full h-full bg-transparent outline-none text-text text-sm pr-2 text-opacity-95"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center relative cursor-pointer justify-center border-[1.5px] border-text border-opacity-25 px-1 py-[0.15rem] rounded">
        <IoIosNotificationsOutline className="text-primary h-8 font-extralight w-8" />

        <div className="absolute top-2 right-[0.60rem] w-2 h-2 bg-red-600 rounded-full" />
      </div>
      <div className="flex items-center relative cursor-pointer justify-center border-[1.5px] border-text border-opacity-25 px-1 py-[0.15rem] rounded">
        <PiEnvelopeSimpleLight className="text-primary rounded-full h-8 font-extralight w-8" />
      </div>

      <div className="w-10 h-10 relative rounded-full">
        <img
          src={Avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-top"
        />

        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="absolute -bottom-1 -right-1 cursor-pointer bg-white items-center justify-center w-4 h-4 p-1 rounded-full"
        >
          <FaChevronDown className="text-text text-opacity-95 h-3 font-extralight w-3" />
        </div>

        {dropdownOpen && (
          <div className="absolute top-12 border z-50 right-0 w-[10rem] h-auto bg-white shadow rounded">
            <button className="w-full h-10 flex items-center justify-start px-5 hover:bg-gray-100">
              <p className="text-text text-opacity-95 text-sm">Settings</p>
            </button>
            <button className="w-full h-10 flex items-center justify-start px-5 hover:bg-gray-100">
              <p className="text-text text-opacity-95 text-sm">Help</p>
            </button>
            <button className="w-full h-10 flex items-center justify-start px-5 hover:bg-gray-100">
              <p className="text-red-600 text-opacity-95 text-sm">Logout</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
