import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const InputWithHiddenLabel = () => {
  return (
    <ComponentContainer title={"Input with hidden label"}>
       <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithHiddenLabel;
