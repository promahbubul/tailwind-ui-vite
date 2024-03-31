import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Centered from "./Centered";
import SplitWithImage from "./SplitWithImage";
import TwoColumnsWithScreenshot from "./TwoColumnsWithScreenshot";
import WithStickyProductScreenshot from "./WithStickyProductScreenshot";
import WithTestimonial from "./WithTestimonial";
import WithTestimonialAndStats from "./WithTestimonialAndStats";

const ContentSection = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Content Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <WithStickyProductScreenshot />
      <WithTestimonial />
      <TwoColumnsWithScreenshot />
      <WithTestimonialAndStats />
      <SplitWithImage />
      <Centered />
    </ComponentPageContainer>
  );
};

export default ContentSection;
