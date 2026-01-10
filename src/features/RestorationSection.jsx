import React from "react";
// Giả định đường dẫn ảnh lưới kết quả của bạn
import resultsGrid from "../assets/before-min.webp";
import LymphaticFreeButton from "../components/LymphaticFreeButton";

const RestorationSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center md:gap-12 gap-6">
      {/* content*/}
      <div className="flex-1 text-left mt-8 md:mt-0">
        {/* Trustpilot */}
        <div className="flex md:flex-row flex-col items-center gap-2 mb-6">
          <div className="order-2 md:order-1 flex items-center gap-2 justify-center">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-[#00b67a] p-1">
                  <svg
                    className="w-2 h-2 text-white fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="text-[13px] font-nunito text-gray-600">
              93.000+ Customers Worldwide
            </span>
          </div>
          <span className="font-bold text-[13px] flex items-center gap-1 order-1 md:order-2">
            <span className="text-[#00b67a] text-lg">★</span> Trustpilot
          </span>
        </div>

        <h2 className="text-[24px] lg:text-[32px] tracking-wide font-lora leading-[1.3] mb-4 text-black">
          Stop Masking Symptoms. Start Restoring Root Cause.
        </h2>

        <div className="space-y-3 text-[18px] tracking-wide font-nunito leading-[1.3] text-black pb-3">
          <p>
            You deserve to feel like yourself again. To wake up without
            puffiness. To see your ankles. To look in the mirror and recognize
            the vibrant woman staring back. To have energy for the people you
            love.
          </p>
          <p className="font-medium">
            You deserve a solution that actually works. Not temporary relief.
            Not symptom masking. Complete lymphatic restoration.
          </p>
        </div>

        {/* */}
        <div className="mt-6 md:block hidden">
          <LymphaticFreeButton />
        </div>
      </div>

      {/* Right*/}
      <div className="flex-1 w-full">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src={resultsGrid}
            alt="Customer Results Comparison"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className=" flex-col items-start block md:hidden">
        <LymphaticFreeButton />
      </div>
    </div>
  );
};

export default RestorationSection;
