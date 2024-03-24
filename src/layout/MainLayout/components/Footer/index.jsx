import { Link } from "react-router-dom";
import { logo } from "../../../../assets/icons/Icons";

const Footer = () => {
  return (
    <footer className="py-8 mt-20 border-t  text-center flex flex-col items-center border-t-gray-100">
      <img src={logo} alt="" className="" />
      <p className="text-gray-500 text-sm mt-5">
        © 2024 Tailwind Labs Inc. All rights reserved.
      </p>
      <div className="flex flex-row gap-5 text-base mt-16 font-semibold text-black">
        <Link to={"/privacy-policy"}>Privacy policy</Link>
        <Link to={"/privacy-policy"}>Changelog</Link>
      </div>
    </footer>
  );
};

export default Footer;
