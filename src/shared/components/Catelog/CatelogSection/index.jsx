import { useEffect, useState } from "react";
import CatelogCard from "../CatelogCard";

const CatelogSection = ({ title, cardData }) => {
  console.log(cardData);
  return (
    <div className="flex flex-row w-full border-t border-gray-200 py-10  items-start ">
      <div className=" w-3/12">
        <h3 className="text-lg text-black font-semibold ">{title}</h3>
      </div>
      <div className="w-9/12 grid grid-cols-12 gap-3 ">
        {/* {cardData.map((item) => (
          <CatelogCard key={item.id} />
        ))} */}

        {cardData?.map((item, index) => (
          <CatelogCard
            path={item?.path}
            key={index}
            title={item?.title}
            img={item?.photo}
            number={item?.total}
          />
        ))}
      </div>
    </div>
  );
};

export default CatelogSection;
