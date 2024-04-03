import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BrandNavWithOverlap from "./BrandNavWithOverlap";
import BrandedNavWithCompactWhitePageHeader from "./BrandedNavWithCompactWhitePageHeader";
import BrandedNavWithWhitePageHeader from "./BrandedNavWithWhitePageHeader";
import DarkNavWithCompactWhitePageHeader from "./DarkNavWithCompactWhitePageHeader";
import DarkNavWithOverlap from "./DarkNavWithOverlap";
import DarkNavWithWhitePageHeader from "./DarkNavWithWhitePageHeader";
import LightNavOnGrayBackground from "./LightNavOnGrayBackground";
import LightNavWithBottomBorder from "./LightNavWithBottomBorder";
import TwoRowNavigationWithOverlap from "./TwoRowNavigationWithOverlap";

const StackedLayouts = () => {
  return (
    <ComponentPageContainer
      breadcrumb={"Application UI / Application Shells"}
      pageTitle={"Stacked Layouts"}
    >
      <DarkNavWithWhitePageHeader />
      <LightNavWithBottomBorder />
      <LightNavOnGrayBackground />
      <BrandedNavWithCompactWhitePageHeader />
      <DarkNavWithOverlap />
      <BrandNavWithOverlap />
      <BrandedNavWithWhitePageHeader />
      <DarkNavWithCompactWhitePageHeader />
      <TwoRowNavigationWithOverlap />
      <DarkNavWithWhitePageHeader />
    </ComponentPageContainer>
  );
};

export default StackedLayouts;
