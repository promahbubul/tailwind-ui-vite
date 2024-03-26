import { Link } from "react-router-dom";

const CatelogCard = ({ title, number, img, path }) => {
  return (
    <Link
      to={path}
      className="col-span-4  font-inter hover:bg-[#f9fafb] cursor-pointer p-2 rounded-xl group"
    >
      <img src={img} alt="" className="rounded-xl " />
      <h3 className="text-base font-medium mt-4 group-hover:text-indigo-600">
        {title}
      </h3>
      <p className="text-gray-500 text-sm font-medium mt-1">
        {number} components
      </p>
    </Link>
  );
};

export default CatelogCard;
