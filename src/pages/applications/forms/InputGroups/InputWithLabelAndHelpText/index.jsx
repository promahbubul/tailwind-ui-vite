/* eslint-disable react/no-unescaped-entities */
import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const InputWithLabelAndHelpText = () => {
  return (
    <ComponentContainer title={"Input with label and help text"}>
      <div className="border border-slate-200 rounded-lg p-10">
        <div className="max-w-xl mx-auto">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
              aria-describedby="email-description"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            We'll only use this for spam.
          </p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default InputWithLabelAndHelpText;
