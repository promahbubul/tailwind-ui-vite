import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import CenteredAccordion from "./CenteredAccordion";
import CenteredAccordionOnDark from "./CenteredAccordionOnDark";
import OffsetWithSupportingText from "./OffsetWithSupportingText";
import SideBySide from "./SideBySide";
import ThreeColumns from "./ThreeColumns";
import ThreeColumnsOnDark from "./ThreeColumnsOnDark";
import ThreeColumnsWithCenteredIntroduction from "./ThreeColumnsWithCenteredIntroduction";
import TwoColumns from "./TwoColumns";
import TwoColumnsOnDark from "./TwoColumnsOnDark";
import TwoColumnsWithCenteredIntroduction from "./TwoColumnsWithCenteredIntroduction";

const Faq = () => {
  return (
    <ComponentPageContainer
      pageTitle={"FAQs"}
      breadcrumb={"Marketing / Page Sections"}
    >
      <OffsetWithSupportingText />
      <CenteredAccordion />
      <CenteredAccordionOnDark />
      <SideBySide />
      <ThreeColumns />
      <ThreeColumnsOnDark />
      <ThreeColumnsWithCenteredIntroduction />
      <TwoColumns />
      <TwoColumnsOnDark />
      <TwoColumnsWithCenteredIntroduction />
    </ComponentPageContainer>
  );
};

export default Faq;
