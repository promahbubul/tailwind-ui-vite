import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import FullWidthWithBackgroundImage from "./FullWidthWithBackgroundImage";
import FullWidthWithBackgroundImageAndLargeContent from "./FullWidthWithBackgroundImageAndLargeContent";
import FullWidthWithOverlappingImageTiles from "./FullWidthWithOverlappingImageTiles";
import WithBackgroundImage from "./WithBackgroundImage";
import WithFadingBackgroundImageAndTestimonials from "./WithFadingBackgroundImageAndTestimonials";
import WithImageTiles from "./WithImageTiles";
import WithOffersAndSplitImage from "./WithOffersAndSplitImage";
import WithOverlappingImageTiles from "./WithOverlappingImageTiles";

const PromoSection = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Promo Sections"}
      breadcrumb={"Ecommerce / Components"}
    >
      <WithImageTiles />
      <WithFadingBackgroundImageAndTestimonials />
      <FullWidthWithBackgroundImage />
      <FullWidthWithOverlappingImageTiles />
      <WithBackgroundImage />
      <WithOverlappingImageTiles />
      <WithOffersAndSplitImage />
      <FullWidthWithBackgroundImageAndLargeContent />      
    </ComponentPageContainer>
  );
};

export default PromoSection;

