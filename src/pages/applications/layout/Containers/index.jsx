import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import ConstrainedToBreakpointWithPaddedContent from "./ConstrainedToBreakpointWithPaddedContent";
import ConstrainedWithPaddedContent from "./ConstrainedWithPaddedContent";
import FullWidthOnMobileConstrainedToBreakpointWithPaddedContentAboveMobile from "./FullWidthOnMobileConstrainedToBreakpointWithPaddedContentAboveMobile";
import FullWidthOnMobileConstrainedWithPaddedContentAbove from "./FullWidthOnMobileConstrainedWithPaddedContentAbove";
import NarrowConstrainedWithPaddedContent from "./NarrowConstrainedWithPaddedContent";

const Containers = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Containers"}
      breadcrumb={"Application UI / Layout"}
    >
      <FullWidthOnMobileConstrainedWithPaddedContentAbove />
      <ConstrainedWithPaddedContent />
      <FullWidthOnMobileConstrainedToBreakpointWithPaddedContentAboveMobile />
      <ConstrainedToBreakpointWithPaddedContent />
      <NarrowConstrainedWithPaddedContent />
    </ComponentPageContainer>
  );
};

export default Containers;
