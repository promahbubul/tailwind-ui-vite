import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithOffsetImage from "../Hero/components/WithOffsetImage";
import Centered2X2Grid from "./Centered2X2Grid";
import ContainedInPanel from "./ContainedInPanel";
import Offset2X2Grid from "./Offset2X2Grid";
import OffsetWithFeatureList from "./OffsetWithFeatureList";
import Simple from "./Simple";
import SimpleThreeColumnWithLargeIcons from "./SimpleThreeColumnWithLargeIcons";
import SimpleThreeColumnWithLargeIconsOnDark from "./SimpleThreeColumnWithLargeIconsOnDark";
import SimpleThreeColumnWithSmallIcons from "./SimpleThreeColumnWithSmallIcons";
import SimpleThreeColumnWithSmallIconsOnDark from "./SimpleThreeColumnWithSmallIconsOnDark";
import SimpleTwoColumnWithSmallIconsOnDark from "./SimpleTwoColumnWithSmallIconsOnDark";
import WithCodeExamplePanel from "./WithCodeExamplePanel";
import WithLargeScreenshot from "./WithLargeScreenshot";
import WithLargeScreenshotOnDark from "./WithLargeScreenshotOnDark";
import WithProductScreenshot from "./WithProductScreenshot";
import WithProductScreenshotOnDark from "./WithProductScreenshotOnDark";
import WithProductScreenshotOnLeft from "./WithProductScreenshotOnLeft";
import WithProductScreenshotPanel from "./WithProductScreenshotPanel";
import WithTestimonial from "./WithTestimonial";

const Feature = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Feature Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <WithProductScreenshot />
      <Centered2X2Grid />
      <WithLargeScreenshotOnDark />
      <WithLargeScreenshot />
      <SimpleThreeColumnWithSmallIconsOnDark />
      <SimpleThreeColumnWithSmallIcons />
      <WithProductScreenshotOnLeft />
      <WithProductScreenshotOnDark />
      <SimpleThreeColumnWithLargeIconsOnDark />
      <SimpleThreeColumnWithLargeIcons />
      <ContainedInPanel />
      <WithProductScreenshotPanel />
      <WithTestimonial />
      <Offset2X2Grid />
      <WithCodeExamplePanel />
      <OffsetWithFeatureList />
      <Simple />
      <SimpleTwoColumnWithSmallIconsOnDark />
    </ComponentPageContainer>
  );
};

export default Feature;
