import React from "react";
import LeafIconLeft from "../icons/LeafIconLeft";
import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people1.png";
import Xicon from "../icons/Xicon";

const CliniciansChoice = () => {
  const avatars = [people1, people2, people3];
  return (
    <div className=" font-sans md:w-[73%]  flex flex-row justify-between w-96.75 pt-4 pb-4 pl-2 pr-0 gap-2.5 z-1">
      <div className="flex items-center justify-center gap-1">
        <span className="">
          {" "}
          <LeafIconLeft />
        </span>
        <p className="text-center font-lora xl:text-[16px] text-[10px] font-medium leading-5.25 tracking-[0.2px]">
          Clinicians' <br />
          Choice
        </p>
        <span className="scale-x-[-1]">
          {" "}
          <LeafIconLeft />
        </span>
      </div>
      <div className="flex text-[12px] flex-col gap-1.5">
        <p>
          <span className="font-semibold">336 clinicians</span> share this on{" "}
          <span className="italic">FrontrowMD</span> without compensation. {""}
          <button>
            <span className="border-b mb-1"> Learn more</span>
          </button>
        </p>

        <div className="flex flex-row items-center gap-1.5">
          <div className="flex -space-x-2">
            {avatars.map((url, index) => (
              <img
                key={index}
                className="size-6 rounded-full border-2 border-white object-cover"
                src={url}
                alt={`Avatar ${index + 1}`}
              />
            ))}
          </div>
          <button className="font-semibold">Read their reviews</button>
        </div>
      </div>
      <div className="flex relative">
        <button className="p-1 absolute top-0 bg-gray-200 rounded-full hover:cursor-pointer">
          <Xicon />
        </button>
      </div>
    </div>
  );
};

export default CliniciansChoice;
