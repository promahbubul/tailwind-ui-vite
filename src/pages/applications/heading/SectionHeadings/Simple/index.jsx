import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const Simple = () => {
  return (
    <ComponentContainer title={"Simple"}>
      <div className="p-10 rounded-xl border border-slate-200">
        {/* Main Design */}
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Job Postings
          </h3>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Simple;
