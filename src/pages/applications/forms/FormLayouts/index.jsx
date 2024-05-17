import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import LabelsOnLeft from "./LabelsOnLeft";
import Stacked from "./Stacked";
import StackedOnDark from "./StackedOnDark";
import TwoColumn from "./TwoColumn";
import TwoColumnWithCards from "./TwoColumnWithCards";

const FormLayouts = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Form Layouts"}
      breadcrumb={"Application UI / Forms"}
    >
      <Stacked />
      <StackedOnDark />
      <TwoColumn />
      <TwoColumnWithCards />
      <LabelsOnLeft />
    </ComponentPageContainer>
  );
};

export default FormLayouts;
