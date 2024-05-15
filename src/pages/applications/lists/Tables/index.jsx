import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import WithSortableHeadings from "./ WithSortableHeadings";
import FullWidth from "./FullWidth";
import FullWidthWithConstrainedContent from "./FullWidthWithConstrainedContent";
import Simple from "./Simple";
import SimpleInCard from "./SimpleInCard";
import SimpleOnDark from "./SimpleOnDark";
import WithAvatarsAndMultilineContent from "./WithAvatarsAndMultilineContent";
import FullWidthWithAvatarsOnDark from "./WithAvatarsAndMultilineContent/FullWidthWithAvatarsOnDark";
import WithBorder from "./WithBorder";
import WithCheckboxes from "./WithCheckboxes";
import WithCondensedContent from "./WithCondensedContent";
import WithGroupedRows from "./WithGroupedRows";
import WithHiddenColumnsOnMobile from "./WithHiddenColumnsOnMobile";
import WithHiddenHeadings from "./WithHiddenHeadings";
import WithStackedColumnsOnMobile from "./WithStackedColumnsOnMobile";
import WithStickyHeader from "./WithStickyHeader";
import WithStripedRows from "./WithStripedRows";
import WithSummaryRows from "./WithSummaryRows";
import WithUppercaseHeadings from "./WithUppercaseHeadings";
import WithVerticalLines from "./WithVerticalLines";

const Tables = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Tables"}
      breadcrumb={"Application UI / Lists"}
    >
      <Simple />
      <SimpleOnDark />
      <SimpleInCard />
      <FullWidth />
      <FullWidthWithConstrainedContent />
      <WithStripedRows />
      <WithUppercaseHeadings />
      <WithStackedColumnsOnMobile />
      <WithHiddenColumnsOnMobile />
      <WithAvatarsAndMultilineContent />
      <WithStickyHeader />
      <WithVerticalLines />
      <WithCondensedContent />
      <WithSortableHeadings />
      <WithGroupedRows />
      <WithSummaryRows />
      <WithBorder />
      <WithCheckboxes />
      <WithHiddenHeadings />
      <FullWidthWithAvatarsOnDark />
    </ComponentPageContainer>
  );
};

export default Tables;
