import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const InputWithAddOn = () => {
  return (
    <ComponentContainer title={"Input with add-on"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
        <label
          htmlFor="company-website"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Company Website
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
            http://
          </span>
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="www.example.com"
          />
        </div>
      </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithAddOn;
