import React from "react";
import "../index.css";

const Slider = ({ marqueeLogos }) => {
  return (
    <div className="bg-[#F9F5EE] py-5 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-black md:text-2xl text-[19px] leading-[1.3] tracking-wide font-serif  ">
          As Seen In
        </h2>
      </div>

      <div className="relative flex">
        <div className="custom-marquee  items-center">
          {marqueeLogos.map((logo, index) => (
            <div key={index} className=" mx-0 flex-shrink-0">
              <span className="text-black font-serif text-3xl font-bold opacity-70 italic">
                <img src={logo} alt="" className="h-7.5 px-12.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
