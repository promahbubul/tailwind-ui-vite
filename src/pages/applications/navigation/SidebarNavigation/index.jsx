import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Brand from "./Brand";
import Dark from "./Dark";
import Light from "./Light";
import WithExpandableSections from "./WithExpandableSections";
import WithSecondaryNavigation from "./WithSecondaryNavigation";

const SidebarNavigation = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Sidebar Navigation  "}
      breadcrumb={"Application UI / Navigation"}
    >
      <Brand />
      <Dark />
      <Light />
      <WithExpandableSections />
      <WithSecondaryNavigation />
    </ComponentPageContainer>
  );
};

export default SidebarNavigation;
