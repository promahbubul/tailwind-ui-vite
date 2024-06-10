import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithButton from "./WithButton";
import WithIcon from "./WithIcon";
import WithLabel from "./WithLabel";
import WithLabelOnLeft from "./WithLabelOnLeft";
import WithTitle from "./WithTitle";
import WithTitleAndButton from "./WithTitleAndButton";
import WithTitleOnLeft from "./WithTitleOnLeft";
import WithToolbar from "./WithToolbar";

const Dividers = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Layout"}
      pageTitle={"Tailwind CSS Dividers"}
    >
      <WithLabel />
      <WithIcon />
      <WithLabelOnLeft />
      <WithTitle />
      <WithTitleOnLeft />
      <WithButton />
      <WithTitleAndButton />
      <WithToolbar />
    </ComponentPageContainer>
  );
};

export default Dividers;
