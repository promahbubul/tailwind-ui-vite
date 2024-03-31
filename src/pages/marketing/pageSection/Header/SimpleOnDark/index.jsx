import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const SimpleOnDark = () => {
  return (
    <ComponentContainer title={"Simple on dark"}>
      <div className="bg-gray-900 py-24 sm:py-32 rounded-xl border border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Support center
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default SimpleOnDark;
