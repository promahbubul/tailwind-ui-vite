import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Centered from "./Centered";
import SideBySideGrid from "./SideBySideGrid";
import SimpleCentered from "./SimpleCentered";
import SimpleFourColumn from "./SimpleFourColumn";
import SplitWithImage from "./SplitWithImage";
import SplitWithPattern from "./SplitWithPattern";
import SplitWithPatternOnDark from "./SplitWithPatternOnDark";
import WithTestimonial from "./WithTestimonial";

const Contact = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Contact Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <Centered />
      <SideBySideGrid />
      <SplitWithPattern />
      <SplitWithPatternOnDark />
      <SimpleFourColumn />
      <SimpleCentered />
      <WithTestimonial />
      <SplitWithImage />
    </ComponentPageContainer>
  );
};

export default Contact;
