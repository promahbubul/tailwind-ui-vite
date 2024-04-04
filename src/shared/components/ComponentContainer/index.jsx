import { RiEyeLine } from "react-icons/ri";
import { MdCode } from "react-icons/md";
const ComponentContainer = ({ children, title, showCode, handleShowCode }) => {
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between items-center mb-5 ">
        <div className=" flex flex-row items-center gap-3">
          <h2 className="text-lg  h-max text-black ">{title}</h2>
          <p className="bg-[#f1f5f9] text-[#334155] font-semibold  py-1 px-2 text-sm   rounded-md">
            Requires REACT
          </p>
        </div>
        <div className="w-max">
          <div className="bg-[#f1f5f9] py-1 px-1 flex flex-row rounded-lg ">
            {/* preview */}
            <button
              onClick={() => handleShowCode(false)}
              className={`flex flex-row items-center px-3
             py-2 rounded-lg ${showCode ? "" : "bg-white"} gap-3`}
            >
              <RiEyeLine className="text-[#0ea6e9] text-xl" />
              <p className="text-base font-medium text-black">Preview</p>
            </button>
            {/* preview */}
            <button
              onClick={() => handleShowCode(true)}
              className={`flex flex-row items-center rounded-lg gap-3 py-2 px-3 ${
                showCode ? "bg-white" : ""
              }`}
            >
              <MdCode className="text-xl" />
              <p className="text-base font-medium text-[#475569]">Preview</p>
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ComponentContainer;
