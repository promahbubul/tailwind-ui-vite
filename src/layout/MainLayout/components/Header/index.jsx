import { Link, NavLink } from "react-router-dom";
import {
  CiSearch,
  IoIosArrowForward,
  logo,
  magic,
} from "../../../../assets/icons/Icons";
import HeaderLinks from "./components/HeaderLinks";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between py-7">
      {/* LEFT */}
      <div className="w-full  flex flex-row items-center gap-10">
        <Link to={"/"}>
          <img src={logo} alt="" className="" />
        </Link>
        <Link
          to={"/"}
          className="flex flex-row items-center gap-1 border-slate-300 rounded-full px-2 py-1 border"
        >
          <img src={magic} alt="" className="" />
          <p className="text-sm font-semibold">Introducing Catalyst</p>
          <p className="text-sm">A modern application UI kit for React</p>
          <IoIosArrowForward />
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-full flex justify-end gap-5 items-center">
        <div className="flex flex-row items-center gap-5">
          <HeaderLinks />
          <CiSearch className="text-2xl font-semibold cursor-pointer" />
        </div>
        <div className="h-7 w-[1px] bg-gray-700"></div>
        <div className="flex flex-row items-center gap-5 text-base">
          <NavLink className={"font-semibold text-black"} to={"/login"}>
            Sign in
          </NavLink>
          <NavLink
            className={
              "py-[10px] px-4 rounded-md bg-black text-white font-bold"
            }
            to={"/all-access"}
          >
            Get all-access
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
