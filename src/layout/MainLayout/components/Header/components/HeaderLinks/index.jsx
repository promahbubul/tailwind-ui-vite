import { NavLink } from "react-router-dom";

const HeaderLinks = () => {
  const links = [
    { title: "Components", path: "components" },
    { title: "Templates", path: "templates" },
    { title: "Docs", path: "documentation" },
  ];
  return (
    <nav className="flex flex-row items-center gap-5 text-base font-semibold">
      {links.map((item, index) => (
        <NavLink to={item.path} key={index}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default HeaderLinks;
