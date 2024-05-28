import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ShortToggle from "./ShortToggle";
import SimpleToggle from "./SimpleToggle";
import ToggleWithIcon from "./ToggleWithIcon";
import WithLeftLabelAndDescription from "./WithLeftLabelAndDescription";
import WithRightLabel from "./WithRightLabel";

const Toogles = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Toggles"}
      breadcrumb={"Application UI / Forms"}
    >
      <SimpleToggle />
      <ShortToggle />
      <ToggleWithIcon />
      <WithLeftLabelAndDescription />
      <WithRightLabel />
    </ComponentPageContainer>
  );
};

export default Toogles;
