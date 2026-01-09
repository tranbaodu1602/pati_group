import React, { useState } from "react";
import tropilot from "../assets/Trustpilot_Score.webp";
import diamond from "../assets/diamond.svg";
import checkmark from "../assets/verified-checkmark.svg";
import { ratingData, allReviews } from "../utils/dataMock";
import { options } from "../utils/enum";
import avt_comment from "../assets/avt_comment.PNG";

const ReviewSection = () => {
  const totalReviews = 110;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // render star
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-[22px] ${
              i < rating ? "text-[#FA8A8A]" : "text-[#FA8A8A]"
            }`}
          >
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  // 3. filtetr
  const filteredReviews = allReviews.filter((review) =>
    selected === "Most Recent" ? true : review.type === selected
  );

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

  // get item for page current
  const currentItems = filteredReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="">
      <div className="flex justify-center flex-col items-center text-center">
        <p className="block max-w-50">
          <img src={tropilot} alt="" />
        </p>
        <p className="text-[32px] font-lora py-4 leading-[1.3] ">
          Real Women, Real Results: 93,000+ <br /> Transformations
        </p>
        <p className="text-[18px] leading-[1.3] mb-4">
          All reviews verified from actual paying customers
        </p>
      </div>
      <div className="py-6 px-4 text-center">
        <p className="text-[24px] font-lora mb-6">Customers Reviews</p>
        <div className="pb-6 border-b border-gray-100 ">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* collum 1*/}
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-2">
                {renderStars(5)}
                <span className="text-base font-normal ">4.67 out of 5</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span className="leading-[1.4]">
                  Based on {totalReviews} reviews
                </span>
                <span>
                  <img src={checkmark} alt="" />
                </span>
              </div>
            </div>

            {/* Ccollum2*/}
            <div className="flex flex-col  flex-[1.5] w-full border-l border-r border-gray-100 px-8 py-2">
              {ratingData.map((row) => (
                <div
                  key={row.stars}
                  className="flex items-center justify-center gap-7"
                >
                  <div className="w-24 shrink-0 flex justify-end">
                    {renderStars(row.stars)}
                  </div>
                  <div className="flex-1 max-w-[130px] h-3.5 bg-[#F2F2F2] overflow-hidden">
                    <div
                      className="h-full bg-[#FA8A8A] transition-all duration-500"
                      style={{
                        width: `${(row.count / totalReviews) * 100}%`,
                      }}
                    ></div>
                  </div>

                  <span className="w-6 text-[13px] text-gray-400 font-light">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>

            {/*  Write a review */}
            <div className="flex justify-center items-center flex-1">
              <a
                href="#"
                className="bg-[#FA8A8A] max-w-65 text-[16px] not-even:cursor-pointer hover:bg-[#FA8A8A] text-white font-bold py-2 px-15 transition-colors tracking-wide text-sm"
              >
                Write a review
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-9">
          <img src={diamond} alt="" className="h-20 w-20" />
          <p className="text-[12px] text-[#4c8eda] font-bold">100.0</p>
        </div>
      </div>
      {/* Menu */}
      <div className="flex border-t border-b border-gray-100 mx-4">
        <div
          className={`h-full min-w-[120px] w-auto py-2 my-0.5  ${
            isOpen ? "border-2 border-gray-400 shadow-xl" : "border-none"
          }`}
        >
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 text-[#FA8A8A] text-[14px] cursor-pointer font-normal focus:outline-none"
            >
              {selected}
              <span
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#FA8A8A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {/* dropdown */}
            {isOpen && (
              <div className="absolute left-0 mt-2 min-w-[115px] w-auto bg-white border border-gray-400 shadow-lg z-50">
                <ul className="py-0">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className={`
                    px-0.5 cursor-pointer text-[13px] transition-colors
                    ${
                      selected === option
                        ? "bg-[#2376ce] text-white"
                        : "text-[#FA8A8A] hover:bg-gray-100"
                    }
                  `}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* List comment */}
      <div className="mx-4 mt-3">
        <div className="space-y-2 mb-12">
          {currentItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100 pb-6">
              <div className="flex justify-between items-start mb-2">
                {renderStars(item.stars)}
                <span className="text-gray-400 text-sm">{item.date}</span>
              </div>
              <div className="flex items-start justify-start gap-2 mb-1.5">
                <span>
                  <img src={avt_comment} alt="" />
                </span>
                <span className="text-[#FA8A8A] text-[17px]">{item.name}</span>
                <span className="bg-[#FA8A8A] text-white text-[12px] px-1.5  leading-[1.3]">
                  Verified
                </span>
              </div>
              <p className="text-black font-nunito text-[16px] mb-4">
                {item.content}
              </p>
              <div className="inline-block border border-gray-200 px-2 py-1 text-gray-500 text-[12px]">
                Review collected via store invitation
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION UI (*/}
        <div className="flex justify-center items-center gap-4 mt-10 select-none">
          {/* First & Prev */}
          <span
            onClick={() => setCurrentPage(1)}
            className="cursor-pointer text-[#FA8A8A] text-lg"
          >
            «
          </span>
          <span
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="cursor-pointer text-[#FA8A8A] text-lg"
          >
            ‹
          </span>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <span
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`cursor-pointer text-xl px-2 transition-all ${
                  currentPage === page
                    ? "text-[#6B7280] font-bold text-3xl scale-110" // Trang hiện tại to và xám đậm (như ảnh)
                    : "text-[#FA8A8A] font-normal"
                }`}
              >
                {page}
              </span>
            );
          })}

          {/* Next & Last */}
          <span
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="cursor-pointer text-[#FA8A8A] text-lg"
          >
            ›
          </span>
          <span
            onClick={() => setCurrentPage(totalPages)}
            className="cursor-pointer text-[#FA8A8A] text-lg"
          >
            »
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
