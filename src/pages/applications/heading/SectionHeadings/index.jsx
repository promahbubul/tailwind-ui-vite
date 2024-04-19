import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Simple from "./Simple";
import WithAction from "./WithAction";
import WithActions from "./WithActions";
import WithActionsAndTabs from "./WithActionsAndTabs";
import WithBadgeAndDropdown from "./WithBadgeAndDropdown";
import WithDescription from "./WithDescription";
import WithInlineTabs from "./WithInlineTabs";
import WithInputGroup from "./WithInputGroup";
import WithLabel from "./WithLabel";
import WithTabs from "./WithTabs";

const ApplicationSectionHeading = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Section Headings"}
      breadcrumb={"Application UI / Headings"}
    >
      <Simple />
      <WithDescription />
      <WithActions />
      <WithAction />
      <WithInputGroup />
      <WithTabs />
      <WithActionsAndTabs />
      <WithInlineTabs />
      <WithLabel />
      <WithBadgeAndDropdown />
    </ComponentPageContainer>
  );
};

export default ApplicationSectionHeading;
