import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const InputWithGrayBackgroundAndBottomBorder = () => {
  return (
    <ComponentContainer title={"Input with gray background and bottom border"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithGrayBackgroundAndBottomBorder;
