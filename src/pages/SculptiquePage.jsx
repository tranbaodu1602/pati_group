import React, { useState } from "react";
import iconbutton from "../assets/IconButton.png";
import iconstar from "../assets/IconStar.png";
import logo from "../assets/logo.avif";
import payment from "../assets/payment.avif";
import { product, accordionData } from "../utils/dataMock";
import GridProduct from "../components/GridProduct";
import CliniciansChoice from "../components/CliniciansChoice";
import PricingList from "../features/PricingList";
import CarIcon from "../icons/carIcon";
import CTA from "../assets/CTA_banner.avif";
import clock from "../assets/clock.webp";
import icon60day from "../assets/60day.webp";
import frameusa from "../assets/FrameUSA.webp";
import RoundIcon from "../icons/roundIcon";
import AccordionItem from "../components/AccordionItem";
import Feedback from "../components/Feedback";

const rules = [
  {
    id: 160111,
    content: "60-Day Money-Back Guarantee",
    image: icon60day,
    img: "60-day",
  },
  {
    id: 32423435,
    content: "Free Shipping From USA Included",
    image: frameusa,
    img: "frame-usa",
  },
];

const SculptiquePage = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    // Nếu click vào cái đang mở thì đóng lại (null), ngược lại thì mở cái mới
    setOpenId(openId === id ? null : id);
  };
  const mobileImages = [
    ...product.product2nd,
    ...product.product3nd,
    ...product.product4nd,
  ];
  return (
    <div className="">
      <div className="p-3 text-center ">
        <img className="block m-auto max-w-40" src={logo} alt="logo" />
      </div>
      <main className="w-full">
        {/* main product */}
        <div className="py-8 md:px-12.5 px-4 grid xl:grid-cols-2 grid-cols-1 md:gap-16">
          <div>
            <div className=" relative flex justify-center">
              <img
                className="object-cover aspect-square rounded-lg overflow-hidden"
                src={product.productImages}
                alt="main-product"
              />
              <div className="items-center absolute bottom-8 z-2 flex justify-center gap-2 leading-[1.2] max-w-[320px]  px-6 py-2  bg-white/85 border border-black rounded-3xl  cursor-pointer text-sm">
                <span>
                  <img
                    className="object-cover aspect-square rounded-lg overflow-hidden w-6"
                    src={iconbutton}
                    alt="icon-button"
                  />
                </span>
                <span className="text-gray-700">Nutritional Information</span>
              </div>
              <img
                className="md:max-w-30 max-w-20 absolute top-4 right-4"
                src={product.bannerProducts}
                alt="banner-product"
              />
            </div>
            {/* product 2nd 3nd 4nd*/}
            {/* Mobile */}
            <div className="md:hidden grid grid-flow-col auto-cols-[20%] gap-4 overflow-x-auto my-4">
              {mobileImages.map((item) => (
                <img
                  key={item.id}
                  src={item.urlImage}
                  alt={item.altImage}
                  className=" aspect-square object-cover rounded-lg snap-start "
                />
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <GridProduct items={product.product2nd} cols={2} />
              <GridProduct items={product.product3nd} cols={3} />
              <GridProduct items={product.product4nd} cols={2} />
            </div>
          </div>

          {/* product review */}
          <div>
            <div className="flex items-center mb-4 gap-4">
              <img src={iconstar} className="block w-25" alt="icon-star" />
              <p className="text-base leading-[1.3] m-0  ">
                {product.star} | 2,345 Reviews
              </p>
            </div>
            <h1 className="text-[28px] mt-4 leading-[1.4] font-lora font-normal">
              {product.productTitle}
            </h1>
            {/* product feature */}
            <div>
              {product.feature.map((item) => (
                <div key={item.id} className="flex items-center pt-4 gap-3">
                  <div className="w-[9.5%] flex items-center">
                    <img src={item.image} alt={item.img} />
                  </div>
                  <p className="text-base leading-[1.3] m-0">{item.content}</p>
                </div>
              ))}
            </div>

            {/*  */}
            <CliniciansChoice />

            {/*  */}
            <div className="bg-[#f3eee0] p-4 rounded-lg">
              <PricingList />
            </div>

            {/* Payment */}
            <div className="flex items-center gap-2 mt-4">
              <div>
                <CarIcon />
              </div>
              <p className="text-[12px] md:text-base">
                Delivered on{" "}
                <span className="text-white bg-[#039869] px-2 py-1 rounded-sm">
                  Tuesday, 13 January
                </span>{" "}
                with Express Shipping
              </p>
            </div>

            {/* Button add to cart */}
            <div className="w-full mt-3 bg-black text-white text-[18px] font-bold text-center rounded-lg p-3.5 cursor-pointer transition-all duration-200">
              <button>ADD TO CART</button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <RoundIcon />
                <div className="pr-4 border-r text-[11px] md:text-sm">
                  Refills Ship Monthly
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={clock} alt="" className="h-5 w-5" />
                <p className=" text-[11px] md:text-sm">
                  Stop or Cancel Anytime
                </p>
              </div>
            </div>
            <div className="overflow-clip my-4">
              <img src={payment} alt="payment" />
            </div>
            <img src={CTA} alt="cta-banner" className="w-full" />
            <div className="space-y-2 my-3">
              {rules.map((rule) => (
                <div key={rule.id} className="flex gap-2 items-center">
                  <img src={rule.image} alt="" className="w-[5%]" />
                  <p className="m-0">{rule.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 mb-4 p-3 rounded-xl bg-[#f3eee0]">
              <Feedback {...product.testimonial} />
            </div>

            <div className="mx-auto max-w-[800px] bg-white">
              {accordionData.map((item) => (
                <AccordionItem
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  isOpen={openId === item.id}
                  onClick={() => handleToggle(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
        <div>ancbd</div>
      </main>
    </div>
  );
};

export default SculptiquePage;
