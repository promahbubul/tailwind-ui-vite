import ComponentContainer from "../../../../../shared/components/ComponentContainer";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const InputWithLeadingIcon = () => {
  return (
    <ComponentContainer title={"Input with leading icon"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithLeadingIcon;
