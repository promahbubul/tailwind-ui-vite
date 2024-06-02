import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import OnGray from "./OnGray";
import Simple from "./Simple";
import WithBadges from "./WithBadges";
import WithIcons from "./WithIcons";
import WithIconsAndBadges from "./WithIconsAndBadges";
import WithSecondaryNavigation from "./WithSecondaryNavigation";

const VerticalNevigation = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Vertical Navigation  "}
      breadcrumb={"Application UI / Navigation"}
    >
      <Simple />
      <WithBadges />
      <WithIconsAndBadges />
      <WithIcons />
      <WithSecondaryNavigation />
      <OnGray />
    </ComponentPageContainer>
  );
};

export default VerticalNevigation;
