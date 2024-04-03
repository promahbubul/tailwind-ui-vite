import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Constrained from "./Constrained";
import FullWidth from "./FullWidth";
import OnBrandBackground from "./OnBrandBackground";
import OnDarkBackground from "./OnDarkBackground";
import WithCallToAction from "./WithCallToAction";
import WithCenteredLogo from "./WithCenteredLogo";
import WithFullWidthFlyoutMenu from "./WithFullWidthFlyoutMenu";
import WithIconsInMobileMenu from "./WithIconsInMobileMenu";
import WithLeftAlignedNav from "./WithLeftAlignedNav";
import WithMultipleFlyoutMenus from "./WithMultipleFlyoutMenus";
import WithRightAlignedNav from "./WithRightAlignedNav";
import WithStackedFlyoutMenu from "./WithStackedFlyoutMenu";

const Headers = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Headers"}
      breadcrumb={"Marketing / Elements"}
    >
      <WithStackedFlyoutMenu />
      <Constrained />
      <OnDarkBackground />
      <OnBrandBackground />
      <WithFullWidthFlyoutMenu />
      <FullWidth />
      <WithCallToAction />
      <WithMultipleFlyoutMenus />
      <WithIconsInMobileMenu />
      <WithLeftAlignedNav />
      <WithRightAlignedNav />
      <WithCenteredLogo />
    </ComponentPageContainer>
  );
};

export default Headers;
