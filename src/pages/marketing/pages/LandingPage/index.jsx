import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithBackgroundImageHeroAndPricingSection from "./WithBackgroundImageHeroAndPricingSection";
import WithLargeScreenshotAndTestimonial from "./WithLargeScreenshotAndTestimonial";
import WithMobileScreenshotAndTestimonialsGrid from "./WithMobileScreenshotAndTestimonialsGrid";
import WithScreenshotsAndStats from "./WithScreenshotsAndStats";

const LandingPage = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Landing Pages"}
      breadcrumb={"Marketing / Page Examples"}
    >
      <WithScreenshotsAndStats />
      <WithLargeScreenshotAndTestimonial />
      <WithBackgroundImageHeroAndPricingSection />
      <WithMobileScreenshotAndTestimonialsGrid />
    </ComponentPageContainer>
  );
};

export default LandingPage;
