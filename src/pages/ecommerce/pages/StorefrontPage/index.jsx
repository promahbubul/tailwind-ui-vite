import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithDarkNavAndFooter from "./WithDarkNavAndFooter";
import WithImageTilesAndFeatureSections from "./WithImageTilesAndFeatureSections";
import WithOffersAndTestimonials from "./WithOffersAndTestimonials";
import WithOverlappingImageTilesAndPerks from "./WithOverlappingImageTilesAndPerks";

const StorefrontPage = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tailwind CSS Storefront Pages"}
      breadcrumb={"Ecommerce / Page Examples"}
    >
      <WithDarkNavAndFooter />
      <WithOffersAndTestimonials />
      <WithImageTilesAndFeatureSections />
      <WithOverlappingImageTilesAndPerks />
    </ComponentPageContainer>
  );
};

export default StorefrontPage;
