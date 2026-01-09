import React from "react";
import { whyFailData } from "../utils/dataMock.jsx";
import xIcon from "../assets/xIcon.png";
import misprice from "../assets/misspiece.webp";
import mispricemobile from "../assets/misspiecemobile.png";
import LymphaticFreeButton from "../components/LymphaticFreeButton.jsx";

const WhyWorkedSection = () => {
  return (
    <div className=" pb-16 mb-9">
      <h2 className="text-center text-[24px] md:text-[32px] text-black mb-10">
        Why Nothing Has <span className="text-[#039869]">Worked</span>
      </h2>

      {/* Container cart */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
        {whyFailData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-sm overflow-hidden flex flex-col shadow-sm"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt="illustration"
                className="w-full h-full object-cover "
              />
            </div>

            {/* content*/}
            <div className="p-6 text-center">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-relaxed">
                {item.title}
              </p>

              <div className="bg-[#ffe3e3] py-2 px-4 rounded-md w-full min-h-[180px]">
                <div className="text-base flex items-center justify-center gap-1.5 leading-[1.3] font-nunito">
                  <span> Why it failed</span>
                  <span className="text-lg">
                    {" "}
                    <img src={xIcon} alt="" className="max-w-6" />
                  </span>
                </div>
                <p className="text-sm md:text-base mt-3  leading-[1.3] font-nunito font-bold">
                  {item.reason}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-920px flex items-center justify-center">
        <img
          src={misprice}
          alt=""
          className="max-w-230 w-full hidden md:block"
        />
        <img
          src={mispricemobile}
          alt=""
          className="max-w-230 w-full md:hidden block mt-3 mb-6"
        />
      </div>
      <div className="flex md:mt-6 mt-0 justify-center">
        <LymphaticFreeButton />
      </div>
    </div>
  );
};

export default WhyWorkedSection;
