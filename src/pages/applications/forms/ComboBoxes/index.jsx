import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import WithCheckOnLeft from "./WithCheckOnLeft";
import WithImage from "./WithImage";
import WithSecondaryText from "./WithSecondaryText";
import WithStatusIndicator from "./WithStatusIndicator";

const ComboBoxes = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Comboboxes"}
      breadcrumb={"Application UI / Form"}
    >
      <Simple />
      <WithCheckOnLeft />
      <WithStatusIndicator />
      <WithImage />
      <WithSecondaryText />
    </ComponentPageContainer>
  );
};

export default ComboBoxes;
