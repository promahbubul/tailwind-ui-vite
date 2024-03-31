import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import FourColumnSimple from "./FourColumnSimple";
import FourColumnSimpleDark from "./FourColumnSimpleDark";
import FourColumnWithCompanyMission from "./FourColumnWithCompanyMission";
import FourColumnWithCompanyMissionOnDark from "./FourColumnWithCompanyMissionOnDark";
import FourColumnWithNewsletter from "./FourColumnWithNewsletter";
import FourColumnWithNewsletterBelow from "./FourColumnWithNewsletterBelow";
import FourColumnWithNewsletterBelowDark from "./FourColumnWithNewsletterBelowDark";
import FourColumnWithNewsletterDark from "./FourColumnWithNewsletterDark";
import SimpleCentered from "./SimpleCentered";
import SocialLinksOnly from "./SocialLinksOnly";

const Footers = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Footers"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <FourColumnWithCompanyMissionOnDark />
      <FourColumnWithCompanyMission />
      <FourColumnSimpleDark />
      <FourColumnSimple />
      <FourColumnWithNewsletterDark />
      <FourColumnWithNewsletter />
      <FourColumnWithNewsletterBelowDark />
      <FourColumnWithNewsletterBelow />
      <SimpleCentered />
      <SocialLinksOnly />
    </ComponentPageContainer>
  );
};

export default Footers;
