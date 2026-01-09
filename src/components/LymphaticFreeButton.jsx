import React from "react";
import icon60day from "../assets/60day.webp";

const LymphaticFreeButton = () => {
  return (
    <div>
      <a
        href="https://pay.trysculptique.com/lymphatic/checkout"
        className="inline-block md:px-[80px] px-5 py-[18px] cursor-pointer no-underline  text-white
    bg-black rounded md:text-[18px] text-base font-bold leading-[1.3]  text-center transition-all duration-200 font-nunito"
      >
        Try Lymphatic Drainage Risk-Free
      </a>
      <p className="font-nunito flex items-center justify-center gap-4 text-base leading-[1.3] mt-4">
        <span>
          <img src={icon60day} alt="" className="w-6" />
        </span>
        <span className="text-black font-bold">
          60 day money-back guarantee
        </span>
      </p>
    </div>
  );
};

export default LymphaticFreeButton;
