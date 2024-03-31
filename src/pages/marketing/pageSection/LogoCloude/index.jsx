import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import Grid from "./Grid";
import GridOnDark from "./GridOnDark";
import Simple from "./Simple";
import SimpleLeftAligned from "./SimpleLeftAligned";
import SimpleLeftAlignedOnDark from "./SimpleLeftAlignedOnDark";
import SimpleOnDark from "./SimpleOnDark";
import SimpleWithCallToAction from "./SimpleWithCallToAction";
import SimpleWithCallToActionOnDark from "./SimpleWithCallToActionOnDark";
import SimpleWithHeading from "./SimpleWithHeading";
import SimpleWithHeadingOnDark from "./SimpleWithHeadingOnDark";
import SplitWithLogosOnRight from "./SplitWithLogosOnRight";
import SplitWithLogosOnRightOnDark from "./SplitWithLogosOnRightOnDark";

const LogoCloude = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Logo Clouds"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <SimpleWithHeading />
      <SimpleWithHeadingOnDark />
      <SimpleWithCallToAction />
      <SimpleWithCallToActionOnDark />
      <SimpleLeftAligned />
      <SimpleLeftAlignedOnDark />
      <SplitWithLogosOnRight />
      <SplitWithLogosOnRightOnDark />
      <Simple />
      <SimpleOnDark />
      <Grid />
      <GridOnDark />
    </ComponentPageContainer>
  );
};

export default LogoCloude;
