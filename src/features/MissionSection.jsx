import React from "react";
// Giả định các đường dẫn ảnh của bạn
import numberkest from "../assets/numbdeskt.webp"; // Ảnh chứa 87% và 89% cho desktop
import numberbom from "../assets/numbmob.webp"; // Ảnh chứa 87% và 89% cho mobile
import cusstomerpuffi from "../assets/puffi.webp"; // Ảnh chứa lọ thuốc và vòng tròn 91%

const MissionSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full md:px-7 px-5 py-15 md:py-0 font-nunito">
      {/* Container chính: Mobile xếp dọc (flex-col), Desktop xếp ngang (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-12">
        {/* Cột Nội dung bên trái */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h2 className="text-[24px] lg:text-[32px] leading-[1.3] font-lora mb-4 text-[#1a1a1a]">
            We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
            Rid Of Bloating...And Feel Like Themselves Again
          </h2>

          <p className="text-[18px] leading-[1.3] mb-3 text-black">
            Here’s where we’re at right now:
          </p>

          {/* Hiển thị ảnh thống kê (87% & 89%) tùy theo kích thước màn hình */}
          <div className="w-full">
            {/* Ảnh cho Desktop */}
            <img
              src={numberkest}
              alt="Statistics Desktop"
              className="hidden md:block w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Cột Hình ảnh bên phải (Lọ thuốc và 91%) */}
        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <img
            src={cusstomerpuffi}
            alt="Product and 91 percent results"
            className="w-full max-w-[500px] h-auto object-contain"
          />
          {/* Ảnh cho Mobile */}
        </div>
        <img
          src={numberbom}
          alt="Statistics Mobile"
          className="block md:hidden w-full h-auto object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default MissionSection;
