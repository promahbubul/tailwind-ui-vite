import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import ThreeColumnWithIllustrationsAndCenteredText from "./ThreeColumnWithIllustrationsAndCenteredText";
import ThreeColumnWithIllustrationsAndHeading from "./ThreeColumnWithIllustrationsAndHeading";
import ThreeColumnWithIllustrationsAndSplitHeader from "./ThreeColumnWithIllustrationsAndSplitHeader";
import ThreecolumnWithIcons from "./ThreecolumnWithIcons";
import ThreecolumnWithIconsAndSupportingText from "./ThreecolumnWithIconsAndSupportingText";
import ThreecolumnWithIllustrationsAndHeader from "./ThreecolumnWithIllustrationsAndHeader";
import TwoByTwoGridWithIllustrations from "./TwoByTwoGridWithIllustrations";

const Incentives = () => {
  return (
    <ComponentPageContainer pageTitle={"Tailwind CSS Incentives"}>
      <ThreeColumnWithIllustrationsAndSplitHeader />
      <FourColumnWithIllustrations />
      <ThreecolumnWithIllustrationsAndHeader />
      <ThreeColumnWithIllustrationsAndCenteredText />
      <ThreeColumnWithIllustrationsAndHeading />
      <TwoByTwoGridWithIllustrations />
      <ThreecolumnWithIconsAndSupportingText />
      <ThreecolumnWithIcons />
    </ComponentPageContainer>
  );
};

export default Incentives;
