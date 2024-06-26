import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const InputWithOverlappingLabel = () => {
  return (
    <ComponentContainer title={"Input with overlapping label"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithOverlappingLabel;
