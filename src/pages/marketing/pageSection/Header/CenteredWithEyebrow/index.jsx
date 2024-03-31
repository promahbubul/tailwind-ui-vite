import ComponentContainer from "../../../../../shared/components/ComponentContainer";

const CenteredWithEyebrow = () => {
  return (
    <ComponentContainer title={"Centered with eyebrow"}>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 rounded-xl border border-slate-200">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Get the help you need
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Support center
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default CenteredWithEyebrow;
