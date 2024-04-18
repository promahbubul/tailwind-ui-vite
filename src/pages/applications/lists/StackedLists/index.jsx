import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import FullWidthWithConstrainedContent from "./FullWidthWithConstrainedContent";
import FullWidthWithLinks from "./FullWidthWithLinks";
import InCardWithLinks from "./InCardWithLinks";
import Narrow from "./Narrow";
import NarrowWithActions from "./NarrowWithActions";
import NarrowWithBadgesOnDark from "./NarrowWithBadgesOnDark";
import NarrowWithSmallAvatars from "./NarrowWithSmallAvatars";
import NarrowWithSmallAvatarsOnDark from "./NarrowWithSmallAvatarsOnDark";
import NarrowWithStickyHeadings from "./NarrowWithStickyHeadings";
import NarrowWithTruncatedContent from "./NarrowWithTruncatedContent";
import Simple from "./Simple";
import SimpleOnDark from "./SimpleOnDark";
import TwoColumnsWithLinks from "./TwoColumnsWithLinks";
import WithBadgesButtonAndActionsMenu from "./WithBadgesButtonAndActionsMenu";
import WithInlineLinksAndActionsMenu from "./WithInlineLinksAndActionsMenu";
import WithInlineLinksAndAvatarGroup from "./WithInlineLinksAndAvatarGroup";
import WithLinks from "./WithLinks";

const StackedLists = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Stacked Lists"}
      breadcrumb={"Application UI / Lists"}
    >
      <Simple />
      <SimpleOnDark />
      <WithLinks />
      <WithInlineLinksAndAvatarGroup />
      <WithInlineLinksAndActionsMenu />
      <WithBadgesButtonAndActionsMenu />
      <InCardWithLinks />
      <TwoColumnsWithLinks />
      <FullWidthWithLinks />
      <FullWidthWithConstrainedContent />
      <Narrow />
      <NarrowWithStickyHeadings />
      <NarrowWithActions />
      <NarrowWithTruncatedContent />
      <NarrowWithSmallAvatars />
      <NarrowWithSmallAvatarsOnDark />
      <NarrowWithBadgesOnDark />
    </ComponentPageContainer>
  );
};

export default StackedLists;
