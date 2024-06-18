
import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const WithLink = () => {
  return (
    <ComponentContainer title={"With link"}>
      <div className="border border-gray-300 rounded-md p-10">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Continuous Integration
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, totam at reprehenderit maxime aut beatae ad.
              </p>
            </div>
            <div className="mt-3 text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Learn more about our CI features
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default WithLink;
