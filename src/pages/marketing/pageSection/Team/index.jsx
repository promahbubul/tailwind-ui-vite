import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import DarkVersionWithLargeImages from "./DarkVersionWithLargeImages";
import FullWidthWithVerticalImages from "./FullWidthWithVerticalImages";
import GridWithLargeRoundImages from "./GridWithLargeRoundImages";
import GridWithRoundImages from "./GridWithRoundImages";
import WithImageAndShortParagraph from "./WithImageAndShortParagraph";
import WithLargeImages from "./WithLargeImages";
import WithMediumImagesOnDark from "./WithMediumImagesOnDark";
import WithSmallImages from "./WithSmallImages";
import WithVerticalImages from "./WithVerticalImages";

const Team = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Team Sections"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <WithSmallImages />
      <WithLargeImages />
      <GridWithRoundImages />
      <DarkVersionWithLargeImages />
      <WithImageAndShortParagraph />
      <WithVerticalImages />
      <FullWidthWithVerticalImages />
      <GridWithLargeRoundImages />
      <WithMediumImagesOnDark />
    </ComponentPageContainer>
  );
};

export default Team;
