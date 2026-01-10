import React, { useState } from "react";
import iconbutton from "../assets/IconButton.png";
import iconstar from "../assets/IconStar.png";
import logo from "../assets/logo.avif";
import payment from "../assets/payment.avif";
import {
  product,
  accordionData,
  marqueeLogos,
  bloadingcell,
  lymphaticContent,
  featuresData,
  faqData,
} from "../utils/dataMock";
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
import Slider from "../components/Slider";
import whynotimg from "../assets/whynotimg.webp";
import whynotimgmobile from "../assets/whynotimgmobile.webp";
import aroundown from "../assets/aroundown.png";
import symptom from "../assets/symptom.webp";
import symptommobile from "../assets/symptommobile.webp";
import StatusItem from "../components/StatusItem";
import SessionContentLayout from "../components/SessionContentLayout";
import WhyWorkedSection from "../features/WhyWorkedSection";
import SystemRestore from "../features/SystemRestore";
import greendesk from "../assets/greendeskt.webp";
import LymphaticFreeButton from "../components/LymphaticFreeButton";
import Faq from "../components/Faq";
import MissionSection from "../features/MissionSection";
import RestorationSection from "../features/RestorationSection";
import ReviewSection from "../features/ReviewSection";
import VideoSection from "../features/VideoSection";
import Truspilot from "../assets/Trustpilot.webp";

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
  //state + func opent/close accordionItem
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // create slide product for mobile
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
        {/* main product ------*/}
        <div className="py-8 md:px-12.5 px-4 grid xl:grid-cols-2 grid-cols-1 md:gap-16">
          <div>
            <div className=" relative flex justify-center">
              <img
                className="object-cover aspect-square rounded-lg overflow-hidden"
                src={product.productImages}
                alt="main-product"
              />
              <div className="items-center  absolute bottom-8 z-2 flex justify-center gap-2 leading-[1.2] max-w-[320px]  px-7 py-2  bg-white/85 border border-black rounded-3xl  cursor-pointer text-sm tracking-wide">
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
            <div className="hidden md:block space-y-2">
              <GridProduct items={product.product2nd} cols={2} />
              <GridProduct items={product.product3nd} cols={3} />
              <GridProduct items={product.product4nd} cols={2} />
            </div>
          </div>

          {/* ------product review------ */}
          <div>
            <div className="flex items-center mb-4 gap-4">
              <img src={iconstar} className="block w-25" alt="icon-star" />
              <p className="md:text-base text-[10px] leading-[1.3] m-0  font-ninito tracking-wide">
                {product.star}/5 Excellent | Based on 2381 Reviews
              </p>
            </div>
            <h1 className="text-[28px] mt-4 leading-[1.4] font-lora font-normal tracking-wide">
              {product.productTitle}
            </h1>
            {/* product feature */}
            <div>
              {product.feature.map((item) => (
                <div key={item.id} className="flex items-center pt-4 gap-3">
                  <div className="w-[9%] flex items-center">
                    <img
                      src={item.image}
                      alt={item.img}
                      className="w-full block"
                    />
                  </div>
                  <p className="text-base font-nunito tracking-wide leading-[1.3] m-0">
                    {item.content}
                  </p>
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
              <p className="text-[12px] md:text-base leading-[1.3] font-nunito">
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

            <div className="mt-4 flex items-center justify-center gap-4 font-nunito">
              <div className="flex items-center justify-center gap-2 ">
                <RoundIcon />
                <div className="pr-4 border-r text-[11px] md:text-base">
                  Refills Ship Bi-Monthly
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={clock} alt="" className="h-5 w-5" />
                <p className=" text-[11px] md:text-base">
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
                  <img src={rule.image} alt="" className="w-[4.5%]" />
                  <p className="m-0 leading-[1.3] text-base font-nunito tracking-wide">
                    {rule.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 mb-4 p-3 rounded-xl bg-[#f3eee0]">
              <Feedback {...product.testimonial} />
            </div>

            <div className="mx-auto max-w-200 bg-white">
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

        {/* ------Slider -As Seen In ------*/}
        <Slider marqueeLogos={marqueeLogos} />

        {/*------ Why Your Bloating..... ------*/}
        <div className="pt-14 md:px-12.5 px-4">
          <div className="max-w-200 m-auto text-center">
            <p className="leading-[1.3] font-lora my-4 md:text-[32px] text-[22px]">
              Why Your{" "}
              <span className="text-[#039869]">
                Bloating, Brain Fog & Swollen Legs
              </span>{" "}
              Are Actually Connected
            </p>
            <p className="md:text-[18px] text-[16px] leading-[1.3] my-4 font-nunito md:px-2 px-0">
              If you're experiencing more than one of these symptoms, your body
              is trying to tell you something:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8.5">
            {bloadingcell.map((item) => (
              <div
                key={item.id}
                className="flex-1 flex flex-row md:flex-col overflow-hidden rounded-md border border-gray-100"
              >
                <div className="w-[120px] h-[120px] min-w-[120px] md:w-full md:h-[184px] mb-3">
                  <img
                    src={item.urlImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-start justify-center bg-[#f7f7f7] p-4 text-center min-h-[100px] md:min-h-37.5 leading-[1.3] text-[16px] font-nunito">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src={whynotimg}
              alt=""
              className="max-w-[920px] w-full hidden md:block"
            />

            <img
              src={whynotimgmobile}
              alt=""
              className="max-w-230 w-full md:hidden block mt-8 mb-6"
            />
          </div>
          <div>
            <img
              src={aroundown}
              alt=""
              className="max-w-12 w-full md:my-6 mb-1 mx-auto block"
            />
          </div>
          {/* ------The Connection You've Been Missing------ */}
          <div className="md:mb-4 max-w-200 m-auto text-center">
            <h2 className="md:text-[34px] text-[28px]  leading-[1.3] font-lora">
              The Connection
              <span className="text-[#039869]"> You've Been Missing</span>
            </h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src={symptom}
              alt=""
              className="max-w-230 w-full hidden md:block"
            />
            <img
              src={symptommobile}
              alt=""
              className="max-w-230 w-full md:hidden block mt-3 mb-6"
            />
          </div>
          <div>
            <img
              src={aroundown}
              alt=""
              className="max-w-12 w-full md:my-6 mx-auto block"
            />
          </div>
          {/* ------Your Hidden Drainage System ------*/}
          <div className="md:mb-10 mb-5 text-center">
            <h2 className="text-[28px] md:text-[34px] leading-[1.3] font-lora">
              Your <span className="text-[#039869]"> Hidden</span> Drainage
              System
            </h2>
          </div>
          <div className="w-full md:space-y-14 space-y-10">
            {/* Part 1:  */}
            <SessionContentLayout
              image={lymphaticContent.section1.image}
              isReverse={true}
            >
              <div className="space-y-2">
                <p className="md:text-[18px] text-[15px] leading-[1.3] font-nunito">
                  Your lymphatic system is your body's internal cleaning crew—a
                  network of vessels that processes{" "}
                  <span className="font-bold">
                    3-4 liters of cellular waste and excess fluid every single
                    day.
                  </span>
                </p>
                <p className="text-[18px] font-nunito leading-[1.3]">
                  When it's working properly, you don't even know it exists.
                </p>

                <ul className="space-y-2 pb-2">
                  {lymphaticContent.section1.benefits.map((item, i) => (
                    <StatusItem key={i} text={item} type="check" />
                  ))}
                </ul>

                <div className="bg-[#ffe3e3] p-4 my-4 rounded-md font-nunito text-lg leading-[1.3]">
                  But after age 35, declining estrogen hijacks this system's
                  ability to function.
                </div>

                <ul className="space-y-2 pt-2">
                  {lymphaticContent.section1.failures.map((item, i) => (
                    <StatusItem key={i} text={item} type="x" />
                  ))}
                </ul>
                <p className="text-[18px] font-nunito leading-[1.3]">
                  Instead of processing and removing waste, it backs up in your
                  tissues.
                </p>
              </div>
            </SessionContentLayout>

            {/* Part 2: (isReverse=false) setup layout img/content */}
            <SessionContentLayout image={lymphaticContent.section2.image}>
              <h3 className="leading-[1.3] text-lg font-bold">
                {lymphaticContent.section2.textTop}
              </h3>
              <p className="leading-[1.3] text-lg font-nunito">
                {lymphaticContent.section2.description}
              </p>

              <div className="bg-[#ffe3e3] p-4 my-6 rounded-xl space-y-4">
                <p className="text-lg font-nunito leading-[1.3]">
                  The metabolic waste your cells produce overnight? It's still
                  sitting there at noon. At dinner. While you're trying to fall
                  asleep.
                </p>
                <ul className="space-y-2">
                  {lymphaticContent.section2.symptoms.map((item, i) => (
                    <StatusItem key={i} text={item} type="x" />
                  ))}
                </ul>
              </div>

              <div className="leading-[1.3] font-nunito tracking-wide text-lg space-y-2">
                <p className="font-bold">
                  Your cells are literally sitting in their own waste—and your
                  body can't flush it out.
                </p>
                <p>
                  The longer this goes on, the worse it gets. More congestion.
                  More inflammation. More pressure on an already compromised
                  system.
                </p>
              </div>
            </SessionContentLayout>
          </div>
        </div>
        {/* ------Ưhy not work------ */}
        <div className="bg-[#f7f2e7] md:px-12.5 px-4 mt-[56px]">
          <WhyWorkedSection />
        </div>
        {/*------ System Restore ------*/}
        <div className="bg-[#f7f2e7] md:px-12.5 px-4 mt-[35px]">
          <SystemRestore />
        </div>
        {/*------ Comment list ------*/}
        <div className=" md:px-12.5 px-4 my-[56px]">
          <ReviewSection />
        </div>
        {/*------Regulation ------ */}
        <div className="bg-[#f7f2e7] md:px-12.5 px-4 ">
          <div className="py-8">
            <div className="mx-2 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center p-2"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-10 w-10 object-contain block mb-4"
                  />

                  <h3 className="m-2 font-nunito tracking-wider leading-[1.3] text-base font-semibold">
                    {item.title}
                  </h3>

                  <span className=" text-base leading-[1.3] font-nunito">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------Expert Advice ------ */}
        <div className="my-14 mx-[5.5px] md:px-12.5 px-3">
          <div className="flex flex-col lg:flex-row items-stretch bg-[#f7f7f7] rounded-2xl overflow-hidden">
            {/* Content */}
            <div className="order-2 lg:order-1 flex-1 p-6 lg:p-10 flex flex-col justify-center">
              <span className="text-[#737373] text-base leading-[1.3] font-nunito block">
                July 4th, 2025
              </span>

              <h2 className="text-2xl lg:text-[32px] md:my-4 my-3 leading-[1.3] font-lora">
                Expert Advice from Dr. Emily Chen of a Premier New York Skin
                Clinic
              </h2>

              <div className="space-y-4 text-[18px] leading-[1.3] tracking-wide font-nunito">
                <p>
                  “Your nutrition plays a powerful role in your appearance. If
                  your body is missing key vitamins and nutrients, it can’t
                  process fat and upkeep healthy connective tissue, which is why
                  unprocessed fat flows up and starts pushing up against your
                  skin, forming bumps you know as cellulite.
                </p>

                <p>
                  SmoothSkin by Sculptique™ contains ingredients that are
                  scientifically proven to enhance microcirculation, boost
                  lymphatic drainage, and reduce inflammation, which restores
                  your tissue and breaks down the fat cells in your skin.”
                </p>
              </div>

              <div className="mt-8 flex flex-col items-start">
                <LymphaticFreeButton />
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full lg:w-1/2">
              <img
                src={greendesk}
                alt="Dr. Emily Chen"
                className="w-full h-full object-cover block rounded-xl"
              />
            </div>
          </div>
        </div>
        {/*------ Video Stories section ------*/}
        <div className="bg-[#f7f2e7] md:px-12.5 px-4 md:py-14 pb-6 ">
          <div className="w-full max-w-200 m-auto md:pt-0 pt-8 pb-2 flex items-center text-center justify-center flex-col">
            <img src={Truspilot} alt="" className="max-w-75 block" />
            <p className="my-4 font-lora leading-[1.3] md:text-[32px]  text-[26px]">
              See The Stories of Sculptique™ Women Firsthand
            </p>
          </div>
          <VideoSection />
          <div className="flex items-center justify-center mt-8">
            <LymphaticFreeButton />
          </div>
        </div>

        {/* ------FAQ ------*/}
        <div className=" md:px-12.5 px-4 md:py-14 py-10 flex items-center justify-center flex-col">
          <div className="my-4 md:text-[32px] text-[24px] leding-[1.3]">
            Frequently Asked Questions
          </div>
          <div className="max-w-[824px] mx-auto rounded-2xl bg-[linear-gradient(180deg,#fff,#f8eaeab9)] overflow-hidden md:p-8 p-2 ">
            <Faq faqData={faqData} />
          </div>
          <div className="mt-6">
            <LymphaticFreeButton />
          </div>
        </div>
        {/*------ Section Footer------ */}
        <div className=" md:px-12.5 px-4 md:py-14 ">
          <MissionSection />
        </div>
        {/* ------Restore ------ */}
        <div className="bg-[#f7f2e7]  md:px-12.5 px-4 md:py-14">
          <RestorationSection />
        </div>
      </main>
    </div>
  );
};

export default SculptiquePage;
