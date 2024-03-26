import React from "react";

const CategloSectionHeading = ({ title, subtitle, className }) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2 className="text-xl font-bold text-black ">{title}</h2>
      <p className="text-sm font-normal text-gray-500">{subtitle}</p>
    </div>
  );
};

export default CategloSectionHeading;
