import { type FC } from "react";
import { HiOutlinePencil } from "react-icons/hi";

import { background as Background } from "../../assets/index";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

const Profile: FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full rounded h-48 relative">
        <img
          src={Background}
          alt="background"
          className="w-full rounded h-full object-cover"
        />

        <div className="h-7 w-7 absolute top-4 shadow cursor-pointer right-11 flex items-center justify-center bg-white rounded-full">
          <HiOutlinePencil className="text-primary h-4 w-4" />
        </div>
      </div>
      <div className="w-full flex">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  );
};

export default Profile;
