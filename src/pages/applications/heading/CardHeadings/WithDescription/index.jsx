import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const WithDescription = () => {
  return (
    <ComponentContainer title={"With description"}>
      <div className="p-10 bg-gray-200 rounded-xl border border-slate-200  ">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Job Postings
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit quam
            corrupti consectetur.
          </p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default WithDescription;
