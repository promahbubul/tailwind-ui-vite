import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithDropdown from "./ WithDropdown";
import Basic from "./Basic";
import IconOnly from "./IconOnly";
import WithCheckboxAndDropdown from "./WithCheckboxAndDropdown";
import WithStat from "./WithStat";

const ButtonGroups = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Button Groups"}
      breadcrumb={"Application UI / Elements"}
    >
      <Basic />
      <IconOnly />
      <WithStat />
      <WithDropdown />
      <WithCheckboxAndDropdown />
    </ComponentPageContainer>
  );
};

export default ButtonGroups;
