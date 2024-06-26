import ComponentContainer from "../../../../../shared/components/ComponentContainer";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

const WithAccentBorder = () => {
  return (
    <ComponentContainer title={"With accent border"}>
      <div className="border border-r-gray-300 p-10 rounded-md">
        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                You have no credits left.{" "}
                <a
                  href="#"
                  className="font-medium text-yellow-700 underline hover:text-yellow-600"
                >
                  Upgrade your account to add more credits.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default WithAccentBorder;
