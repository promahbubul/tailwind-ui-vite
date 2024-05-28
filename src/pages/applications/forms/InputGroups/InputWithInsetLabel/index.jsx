import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const InputWithInsetLabel = () => {
  return (
    <ComponentContainer title={"Input with inset label"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
          <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithInsetLabel;
