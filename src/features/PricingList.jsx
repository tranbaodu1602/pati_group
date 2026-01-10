import { useState } from "react";
import { PRICING_DATA } from "../utils/dataMock";
import cartIcon from "../assets/carIcon.webp";
import downloadIcon from "../assets/downloadIcon.webp";
import giftIcon from "../assets/giftIcon.avif";
import BadgeIcon from "../icons/BadgeIcon";

const ICON_PRICING = {
  car: cartIcon,
  download: downloadIcon,
  gift: giftIcon,
};

const PricingList = () => {
  const [selectedId, setSelectedId] = useState("bottle-1");

  return (
    <div className="space-y-3 font-nunito">
      {PRICING_DATA.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedId(item.id)}
          className={`border relative rounded-xl cursor-pointer transition-all
            ${
              selectedId === item.id
                ? "border-green-700 shadow-lg"
                : "border-green-200"
            }`}
        >
          {item.badge && (
            <div className="absolute -top-5 -right-2 z-20 drop-shadow-md transform ">
              <BadgeIcon />
            </div>
          )}
          {/* Header*/}
          <div className="p-4 bg-white flex justify-between items-center rounded-t-[10px]">
            <div className="flex items-center gap-3">
              {/* <RadioButton active={selectedId === item.id} /> */}
              <input
                type="radio"
                name="pricing-plan"
                checked={selectedId === item.id}
                onChange={() => setSelectedId(item.id)}
                className="w-6 h-6 accent-[#008a5c] cursor-pointer"
              />
              <div>
                <h4 className="text-base leading-[1.3] font-semibold text-black">
                  {item.title}
                </h4>
                <p className="text-black text-xs">
                  {item.quantityInfo} |{" "}
                  <span className=" text-black">{item.savings}</span>
                </p>
              </div>
            </div>
            <div className="text-right ">
              <p className="text-base font-semibold leading-5">
                ${item.currentPrice}
              </p>
              <p className="text-gray-400 line-through text-sm">
                ${item.originalPrice}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`bg-[#039869] rounded-b-[10px] text-white transition-opacity duration-300 ${
              selectedId === item.id ? "opacity-100" : "opacity-60"
            }`}
          >
            {item.benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-center gap-2 px-2 py-1 border-t border-white text-xs leading-1 font-nunito font-medium"
              >
                <img
                  src={ICON_PRICING[benefit.type]}
                  alt={benefit.type}
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
                {benefit.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
