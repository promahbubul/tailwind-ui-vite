import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CenteredOnDarkPanel from "./CenteredOnDarkPanel";
import DarkPanelWithAppScreenshot from "./DarkPanelWithAppScreenshot";
import SimpleCentered from "./SimpleCentered";
import SimpleCenteredOnBrand from "./SimpleCenteredOnBrand";
import SimpleCenteredOnDark from "./SimpleCenteredOnDark";
import SimpleJustified from "./SimpleJustified";
import SimpleJustifiedOnLightBrand from "./SimpleJustifiedOnLightBrand";
import SimpleStacked from "./SimpleStacked";
import SplitWithImage from "./SplitWithImage";
import TwoColumnsWithPhotoOnDark from "./TwoColumnsWithPhotoOnDark";
import WithImageTiles from "./WithImageTiles";

const Cta = () => {
  return (
    <ComponentPageContainer
      pageTitle={"CTA Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <DarkPanelWithAppScreenshot />
      <SimpleStacked />
      <CenteredOnDarkPanel />
      <SimpleCentered />
      <SimpleCenteredOnDark />
      <SimpleCenteredOnBrand />
      <SimpleJustified />
      <SimpleJustifiedOnLightBrand />
      <SplitWithImage />
      <TwoColumnsWithPhotoOnDark />
      <WithImageTiles />
    </ComponentPageContainer>
  );
};

export default Cta;
