import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BottomAligned from "./BottomAligned";
import FloatingAtBottom from "./FloatingAtBottom";
import FloatingAtBottomCentered from "./FloatingAtBottomCentered";
import LeftAligned from "./LeftAligned";
import OnBrand from "./OnBrand";
import OnDark from "./OnDark";
import PrivacyNoticeCentered from "./PrivacyNoticeCentered";
import PrivacyNoticeFullWidth from "./PrivacyNoticeFullWidth";
import PrivacyNoticeLeftAligned from "./PrivacyNoticeLeftAligned";
import PrivacyNoticeRightAligned from "./PrivacyNoticeRightAligned";
import WithBackgroundGlow from "./WithBackgroundGlow";
import WithButton from "./WithButton";
import WithLink from "./WithLink";

const Banners = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Banners"}
      breadcrumb={"Marketing / Elements"}
    >
      <WithButton />
      <OnDark />
      <OnBrand />
      <WithBackgroundGlow />
      <WithLink />
      <LeftAligned />
      <BottomAligned />
      <FloatingAtBottom />
      <FloatingAtBottomCentered />
      <PrivacyNoticeRightAligned />
      <PrivacyNoticeCentered />
      <PrivacyNoticeLeftAligned />
      <PrivacyNoticeFullWidth />
    </ComponentPageContainer>
  );
};

export default Banners;
