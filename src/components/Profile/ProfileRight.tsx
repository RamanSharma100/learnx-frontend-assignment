import { useState, type FC } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

const TABS: string[] = ["About", "skills & Certificates", "Posts", "Spaces"];

const ProfileRight: FC = () => {
  const [tab, setTab] = useState<string>(TABS[0]);

  return (
    <div className="w-full flex bg-[#F6F9FE] p-5 flex-col">
      <div className="w-full flex bg-white rounded shadow flex-col">
        <div className="w-full flex shadow-md items-center gap-5 px-1 capitalize pt-4 border-b border-slate-200">
          {TABS.map((tabItem: string, index: number) => (
            <p
              key={index + Math.random() * 2457}
              onClick={() => setTab(tabItem)}
              className={`text-medium font-medium text-secondary py-3 px-5  border-b-4  cursor-pointer
                        ${
                          tab === tabItem
                            ? `text-opacity-120  border-primary`
                            : `text-opacity-80 border-transparent`
                        }
                        hover:border-primary hover:text-opacity-100`}
            >
              {tabItem}
            </p>
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-center p-5 px-1">
          {tab && (
            <>
              <div className="w-full border-b border-b-slate-300 flex p-5 pb-8 px-4">
                <p className="text-secondary pr-[4rem] font-normal text-opacity-70 text-base">
                  The discovery was made by Richard McClintok, a professor of
                  Latin at Hampden-Sydney College in Virginia, who faced the
                  impetuous recurrece of the dark word consectetur in the text
                  Lorem Ipsum researched its origins to identify them in
                  sections 1.10.32 and 1.10.33 of aforementioned work.
                </p>
                <div className="flex flex-col items-end justify-start pr-3">
                  <div className="h-7 w-7 shadow cursor-pointer bg-primary flex items-center justify-center rounded-full">
                    <HiOutlinePencil className="text-white h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-b-slate-300 flex flex-col p-5 pb-8  pt-8 px-4">
                <p className="text-secondary pr-[4rem] font-medium text-opacity-100 text-2xl">
                  Experience
                </p>

                <div className="w-full flex flex-col mt-8">
                  <div className="flex w-full items-start px-3">
                    <div className="h-14 w-14 shadow cursor-pointer bg-primary bg-opacity-30 flex items-center justify-center rounded-full">
                      <MdWork className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex flex-col w-[90%] items-start justify-center -mt-2 ml-3">
                      <p className="text-secondary font-medium text-base">
                        Crisis Intervention Specialist
                      </p>
                      <p className="text-secondary text-opacity-80 font-normal mb-1 text-sm">
                        Januaury 2023 - Present
                      </p>
                      <p className="text-secondary text-opacity-60 font-light text-sm">
                        Icoderz - Ahmedabad, India
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 shadow cursor-pointer bg-primary flex items-center justify-center rounded-full">
                        <FaPlus className="text-white h-4 w-4" />
                      </div>
                      <div className="h-7 w-7 shadow cursor-pointer bg-primary flex items-center justify-center rounded-full">
                        <HiOutlinePencil className="text-white h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary pl-16 ml-3 mt-8 pr-16 text-opacity-80 font-normal text-sm px-3">
                    work with client and web studios as a freelancer, Work in
                    next areas eCommerce web projects; creative landing pages;
                    IOs and Android apps; corporate web sites and corporate
                    identity sometimes.
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col p-5 pb-8  pt-8 px-4">
                <p className="text-secondary pr-[4rem] font-medium text-opacity-100 text-2xl">
                  Education
                </p>

                <div className="w-full flex flex-col mt-8">
                  <div className="flex w-full items-start px-3">
                    <div className="h-14 w-14 shadow cursor-pointer bg-primary bg-opacity-30 flex items-center justify-center rounded-full">
                      <RiGraduationCapLine className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex flex-col w-[90%] items-start justify-center -mt-2 ml-3">
                      <p className="text-secondary font-medium text-base">
                        B.E. Electronics & Telecommunication Engg.
                      </p>
                      <p className="text-secondary text-opacity-80 font-normal mb-1 text-sm">
                        Aug 2015 - June 2019
                      </p>
                      <p className="text-secondary text-opacity-60 font-light text-sm">
                        SBJITMR - Nagpur, India
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 shadow cursor-pointer bg-primary flex items-center justify-center rounded-full">
                        <FaPlus className="text-white h-4 w-4" />
                      </div>
                      <div className="h-7 w-7 shadow cursor-pointer bg-primary flex items-center justify-center rounded-full">
                        <HiOutlinePencil className="text-white h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[28rem] flex flex-col mt-8" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;
