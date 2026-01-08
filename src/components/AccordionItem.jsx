import React from "react";
import plusIcon from "../assets/plus.png";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div
      className={`mb-4 overflow-hidden cursor-pointer rounded-4xl border transition-all duration-300 ${
        isOpen
          ? "border-[#039869] bg-white shadow-sm"
          : "border-[#d2d2d2] bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-3 text-left focus:outline-none"
      >
        <span className={`text-base font-normal text-black`}>{title}</span>

        {/* Nút chứa Icon */}
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#F2FBF9] text-[#1D9177]"
              : "bg-[#F2FBF9] text-[#1D9177]"
          }`}
        >
          <div>
            <img
              src={plusIcon}
              alt=""
              className={` w-6 h-6 ${
                isOpen &&
                "rotate-45 transition-transform duration-300 ease-in-out"
              }`}
            />
          </div>
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-6 pb-6 text-black leading-relaxed faq-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};
export default AccordionItem;
