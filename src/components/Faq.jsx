import React, { useState } from "react";
import arrowndown from "../assets/arrowdown.png";

const Faq = ({ faqData }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      // Nếu đã mở thì đóng lại (xóa khỏi mảng)
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Nếu chưa mở thì thêm vào mảng (cho phép mở nhiều cái)
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <>
      {faqData.map((item) => {
        const isOpen = openIndexes.includes(item.id);

        return (
          <div key={item.id} className="border-b-2 border-white last:border-0">
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full py-5 px-6 flex justify-between items-center text-left hover:opacity-70 transition-all"
            >
              <span className="text-[#333] font-nunito md:text-[17px] text-[16px] font-medium leading-tight">
                {item.question}
              </span>
              <img
                src={arrowndown}
                alt=""
                className={`md:w-7 w-5 transition-transform duration-500 ease-in-out ${
                  isOpen ? "rotate-[180deg]" : "rotate-0"
                }`}
              />
            </button>

            {/* content show */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-[#555] px-6 font-nunito md:text-base text-[14px] leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Faq;
