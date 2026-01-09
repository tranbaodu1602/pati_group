import React from "react";

const SessionContentLayout = ({ children, image, isReverse = false }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-25 items-center">
    <div className={`w-full ${isReverse ? "md:order-2" : "md:order-1"}`}>
      <img
        src={image}
        alt="Lymphatic Layout"
        className="w-full h-auto rounded-lg shadow-sm block"
      />
    </div>

    {/* Conetent*/}
    <div
      className={`w-full ${
        isReverse ? "md:order-1" : "md:order-2"
      } font-nunito space-y-4`}
    >
      {children}
    </div>
  </div>
);

export default SessionContentLayout;
