const ComponentContainer = ({ children, title }) => {
  return (
    <div className="mt-10">
      <div className="flex flex-row">
        {" "}
        <h2 className="text-lg text-black mb-5">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ComponentContainer;
