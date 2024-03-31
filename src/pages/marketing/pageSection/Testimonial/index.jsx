import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Grid from "./Grid";
import OffWhiteGrid from "./OffWhiteGrid";
import SideBySide from "./SideBySide";
import SideBySideOnDark from "./SideBySideOnDark";
import SimpleCentered from "./SimpleCentered";
import WithBackgroundImage from "./WithBackgroundImage";
import WithLargeAvatar from "./WithLargeAvatar";
import WithOverlappingImage from "./WithOverlappingImage";
import WithStarRating from "./WithStarRating";

const Testimonial = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Testimonials"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <SimpleCentered />
      <WithLargeAvatar />
      <WithOverlappingImage />
      <WithBackgroundImage />
      <SideBySide />
      <SideBySideOnDark />
      <WithStarRating />
      <Grid />
      <OffWhiteGrid />
    </ComponentPageContainer>
  );
};

export default Testimonial;
