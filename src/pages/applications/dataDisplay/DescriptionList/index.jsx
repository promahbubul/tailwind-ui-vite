import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import LeftAligned from "./LeftAligned";
import LeftAlignedInCard from "./LeftAlignedInCard";
import LeftAlignedOnDark from "./LeftAlignedOnDark";
import LeftAlignedStriped from "./LeftAlignedStriped";
import LeftAlignedWithInlineActions from "./LeftAlignedWithInlineActions";
import NarrowWithHiddenLabels from "./NarrowWithHiddenLabels";
import TwoColumn from "./TwoColumn";

const DescriptionList = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Description Lists"}
      breadcrumb={"Application UI / Data Display"}
    >
      <LeftAligned />
      <LeftAlignedOnDark />
      <LeftAlignedInCard />
      <LeftAlignedStriped />
      <TwoColumn />
      <LeftAlignedWithInlineActions />
      <NarrowWithHiddenLabels />
    </ComponentPageContainer>
  );
};

export default DescriptionList;
