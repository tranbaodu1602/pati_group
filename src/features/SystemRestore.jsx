import React, { useState } from "react";
import { ingredientsData } from "../utils/dataMock.jsx";
import arroundown from "../assets/arrowdown.png";
import checkIcon from "../assets/checkIcon.png";
import sysnereffect from "../assets/synereffect.webp";
import sysnereffectmobile from "../assets/synereffectmobile.webp";

const SystemRestore = () => {
  const [openIds, setOpenIds] = useState([]);

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className=" bg-[#f4f1ea] py-14 w-full">
      <div className="max-w-200 m-auto text-center">
        <div className="my-4 font-normal md:text-[32px] text-[24px] leading-[1.3]">
          <span className="text-[#039869]">The 8-Ingredient System</span> That
          Restores What Hormones Once Maintained
        </div>
        <p className="my-4 md:text-[19px] text-[17px] font-nunito leading-[1.3]">
          Sculptique is the only formula that addresses ALL 6 mechanisms of
          lymphatic dysfunction simultaneously—not with symbolic doses, but with
          therapeutic amounts based on clinical research. <br /> Not just moving
          fluid temporarily. Not just reducing inflammation.{" "}
          <strong>Complete restoration.</strong>
        </p>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl border-[0.5px] border-black bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-sm">
        {ingredientsData.map((item) => {
          const isOpen = openIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="border-[0.5px] border-black md:p-6 p-4 cursor-pointer items-center flex flex-col transition-all duration-300"
            >
              <div className="flex items-center gap-2 justify-center text-[#2d8a3c] text-base font-nunito">
                <span className="text-basse">
                  <img src={checkIcon} alt="" className="max-w-4" />
                </span>
                {item.benefit}
              </div>

              <div className="block max-w-[120px] max-h-20 md:my-3 mx-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain max-h-full hidden md:block"
                />
              </div>

              <div className="w-full flex items-center gap-2 justify-between">
                <div className="w-[20%]">
                  <img
                    src={item.image}
                    alt=""
                    className="md:hidden block w-full"
                  />
                </div>
                <div className="text-base font-bold font-nunito leading-[1.3]">
                  <h5>{item.name}</h5>
                </div>
                <div className="max-w-6 ml-auto">
                  <button onClick={() => toggleItem(item.id)}>
                    {" "}
                    <img src={arroundown} alt="" className="w-full" />
                  </button>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[13px] leading-relaxed text-gray-700 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <div className=" max-w-[580px] ">
          <img src={sysnereffect} alt="" className=" w-full hidden md:block" />
          <img
            src={sysnereffectmobile}
            alt=""
            className=" w-full md:hidden block "
          />
        </div>
      </div>
    </div>
  );
};

export default SystemRestore;
