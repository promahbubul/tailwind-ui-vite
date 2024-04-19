import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const WithLabel = () => {
  return (
    <ComponentContainer title={"With label"}>
      <div className="rounded-xl border border-slate-200 p-10">
        <div className="border-b border-gray-200 pb-5">
          <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
            <h3 className="ml-2 mt-2 text-base font-semibold leading-6 text-gray-900">
              Job Postings
            </h3>
            <p className="ml-2 mt-1 truncate text-sm text-gray-500">
              in Engineering
            </p>
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default WithLabel;
