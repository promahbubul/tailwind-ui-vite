import ComponentContainer from "../../../../../shared/components/ComponentContainer";

import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

const InputWithTrailingIcon = () => {
  return (
    <ComponentContainer title={"Input with trailing icon"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
        <label
          htmlFor="account-number"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Account number
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="account-number"
            id="account-number"
            className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="000-00-0000"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <QuestionMarkCircleIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithTrailingIcon;
