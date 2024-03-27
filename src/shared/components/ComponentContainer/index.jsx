const ComponentContainer = ({ children, title }) => {
  return (
    <div className="mt-10">
      <h2 className="text-lg text-black mb-5">{title}</h2>
      {children}
    </div>
  );
};

export default ComponentContainer;
