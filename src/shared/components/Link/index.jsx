import { Link } from "react-router-dom";
const Links = ({ children, to }) => {
  return (
    <Link to={to} className="text-base text-black font-semibold">
      {children}
    </Link>
  );
};

export default Links;
