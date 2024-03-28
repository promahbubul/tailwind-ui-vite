const ComponentPageContainer = ({ children, pageTitle, breadcrumb }) => {
  return (
    <div className="mt-20 max-w-7xl mx-auto ">
      {/* PAGE TITLE */}
      <div className="">
        <p className="text-slate-500 text-base font-medium">{breadcrumb}</p>
        <h1 className="text-black font-extrabold font-inter text-3xl leading-relaxed">
          {pageTitle}
        </h1>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default ComponentPageContainer;
